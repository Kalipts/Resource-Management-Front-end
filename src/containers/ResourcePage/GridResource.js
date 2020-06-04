import React, { useState } from 'react';

import { Container } from './Style/GridResourceStyle';
import RowGridResource from './RowGridResource';

const GridResource = props => {
  const [checked, setChecked] = useState(
    // eslint-disable-next-line react/prop-types
    [...Array(props.resources.length)].map(x => false),
  );
  const [checkAll, setCheckAll] = useState(false);
  // eslint-disable-next-line react/prop-types
  const {
    persons,
    currentPage,
    resources,
    editRow,
    deleteRow,
    setPersonsSelected,
    personsSelected,
  } = props;

  const handleCheckboxChange = index => {
    const copy = [...checked];
    copy[index] = !copy[index];
    setChecked(copy);
  };

  const handleAllCheckboxChange = () => {
    setCheckAll(!checkAll);
    let copy = [...Array(props.persons.length)].map(x => false);
    copy = [...copy].map(x => !checkAll);
    setChecked(copy);
    if (!checkAll) {
      const ids = persons.map(person => person._id);
      setPersonsSelected(ids);
    } else {
      setPersonsSelected([]);
    }
  };

  const rows = [];
  resources.map((resource, index) => {
    const { firstName, lastName, jobtitle,department, permission, email } = resource;
    const editResource = () => {
      editRow(resource);
    };
    const deleteResource = () => {
      deleteRow(resource);
    };
    rows.push(
      <RowGridResource
        key={resource._id}
        header={false}
        index={currentPage * 5 + index - 5}
        checked={checked}
        handleCheckboxChange={handleCheckboxChange}
        firstName={firstName}
        lastName={lastName}
        jobtitle={jobtitle.name}
        email={email}
        role={permission}
        title="true"
        editResource={editResource}
        deleteResource={deleteResource}
        resource={resource}
        setPersonsSelected={setPersonsSelected}
        personsSelected={personsSelected}
      />,
    );
  });
  return (
    <Container>
      <RowGridResource
        header
        checked={checkAll}
        handleCheckboxChange={handleAllCheckboxChange}
        firstName="First Name"
        lastName="Last Name"
        jobtitle="Job Title"
        email="Email"
        role="Permission"
        title="true"
      />
      {rows}
    </Container>
  );
};
export default GridResource;
