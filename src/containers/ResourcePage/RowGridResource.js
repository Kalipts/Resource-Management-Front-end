import React from 'react';
import {
  ChecboxGrid,
  Edit,
  HeaderTable,
  TagElement,
} from './Style/GridResourceStyle';
import Checkbox from './Checkbox';
import { Active, ActiveSpan } from './Active';
import Act from './ActionResouce';
import { showPermission } from './Kit';

const RowGridResource = props => {
  // eslint-disable-next-line react/prop-types
  const { checked, handleCheckboxChange } = props;
  const {
    // eslint-disable-next-line react/prop-types
    firstName,
    lastName,
    jobtitle,
    email,
    role,
    resource,
    setPersonsSelected,
    personsSelected,
  } = props;
  const { editResource, deleteResource } = props;
  const { title } = props;
  const { index } = props;
  const { header } = props;

  const handleCheckbox = () => {
    handleCheckboxChange(index);
    const newPersons = [...personsSelected, resource._id];
    setPersonsSelected(newPersons);
    if (checked[index]) {
      const getIndex = personsSelected.indexOf(resource._id);
      const clone = [...personsSelected];
      clone.splice(getIndex, 1);
      setPersonsSelected(clone);
    }
  };

  let checkBox;
  let action;
  let active;
  if (!header) {
    checkBox = <Checkbox checked={checked[index]} onChange={handleCheckbox} />;
    action = (
      <TagElement>
        <Edit onClick={editResource}>Edit</Edit>
        <Act onDelete={deleteResource} />
      </TagElement>
    );
    active = (
      <TagElement>
        <Active>
          <ActiveSpan>Active</ActiveSpan>
        </Active>
      </TagElement>
    );
  } else {
    checkBox = <Checkbox checked={checked} onChange={handleCheckboxChange} />;
    action = <TagElement title="true">Action</TagElement>;
    active = <TagElement title="true">Status</TagElement>;
  }
  const permission = () => {
    if (typeof role === 'number') {
      return showPermission(role);
    }
    return role;
  };
  return (
    <HeaderTable>
      <ChecboxGrid>
        <label>{checkBox}</label>
      </ChecboxGrid>
      <TagElement> {firstName}</TagElement>
      <TagElement title="true"> {lastName} </TagElement>
      <TagElement title="true"> {jobtitle} </TagElement>
      <TagElement title="true"> {permission()} </TagElement>
      {active}
      {action}
    </HeaderTable>
  );
};

export default RowGridResource;
