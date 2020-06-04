import React, { useContext, useState } from 'react';
import { ResourceContext } from '../../context/Resource';
import GridResource from './GridResource';
import addIcon from '../../images/add-icon.png';
import ResourceForm from './form/ResourceForm';
import {
  AddButtonSpan,
  ResourceTitle,
  BodyPage,
  AddButton,
  ResourceContainer,
  AddButtonIcon,
  ResourceHeader,
} from './Style/IndexStyle';
import { Search } from './search/index';
import { PaginationResource } from './pagination';
import {
  prep,
  nextp,
  resourcesPerPage,
  indexOfFirstResource,
  indexOfLastResource,
} from './Kit';
import { ResourceModel, ResourceModelEdit } from './ResourceModel';

function Resource() {
  const resourceContext = useContext(ResourceContext);
  const {
    persons,
    jobs,
    departments,
    removeResource,
    removeSelected,
  } = resourceContext;

  const [filter, setFilter] = useState('');
  const lowercasedFilter = filter.toLowerCase();
  const filteredData = persons.filter(obj =>
    obj.name.toLowerCase().includes(lowercasedFilter),
  );

  const [personsSelected, setPersonsSelected] = useState([]);

  const handleResourceDelete = () => {
    removeSelected(personsSelected);
  };

  const [isOpen, setIsOpen] = useState(false);
  const initResource = ResourceModel();
  const [editing, setEditing] = useState(false);
  const [currentResource, setCurrentResource] = useState(initResource);
  const [currentPage, setCurrentPage] = useState(1);

  // Get current resources
  const currentResources = filteredData.slice(
    indexOfFirstResource(currentPage),
    indexOfLastResource(currentPage),
  );
  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const toggleModalEdit = () => {
    setEditing(true);
    setIsOpen(!isOpen);
  };
  const toggleModalAdd = () => {
    setIsOpen(!isOpen);
    setEditing(false);
  };
  const editRow = resource => {
    setEditing(true);

    const resourceObject = ResourceModelEdit(
      resource._id,
      resource.permission,
      resource.jobtitle,
      resource.department,
      resource.firstName,
      resource.lastName,
      resource.email,
    );
    setCurrentResource(resourceObject);
    toggleModalEdit();
  };
  const deleteRow = async resource => {
    setEditing(false);
    removeResource(resource);
  };

  return (
    <ResourceContainer>
      <ResourceForm
        initResource={initResource}
        editing={editing}
        currentResource={currentResource}
        onClose={toggleModalEdit}
        show={isOpen}
        jobs={jobs}
        departments={departments}
      />
      <ResourceHeader>
        <ResourceTitle>List Resources</ResourceTitle>
        <AddButton onClick={toggleModalAdd}>
          <AddButtonIcon src={addIcon} />
          <AddButtonSpan>Add New Resources</AddButtonSpan>
        </AddButton>
        <AddButton onClick={handleResourceDelete}>
          <AddButtonIcon src={addIcon} />
          <AddButtonSpan>Delete Selected</AddButtonSpan>
        </AddButton>
        <Search setFilter={setFilter} />
      </ResourceHeader>
      <BodyPage>
        <GridResource
          resources={currentResources}
          deleteRow={deleteRow}
          editRow={editRow}
          persons={persons}
          currentPage={currentPage}
          personsSelected={personsSelected}
          setPersonsSelected={setPersonsSelected}
        />
      </BodyPage>
      <PaginationResource
        currentPage={currentPage}
        prep={() => prep(currentPage, setCurrentPage)}
        nextp={() => nextp(currentPage, setCurrentPage, persons)}
        resourcesPerPage={resourcesPerPage}
        totalResources={filteredData.length}
        paginate={paginate}
      />
    </ResourceContainer>
  );
}

export default Resource;
