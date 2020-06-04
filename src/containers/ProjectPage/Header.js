import React, { useState } from 'react';
import ProjectForm from './ProjectForm/index';

import { Wrapper, Title, AddProjectButton } from './Style/Title';
import addIcon from '../../images/add-icon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <Title>List Projects</Title>
      <AddProjectButton onClick={handleOpenForm}>
        <span>
          <img alt="add-project" src={addIcon}></img>Add New Project
        </span>
      </AddProjectButton>
      {isOpen && <ProjectForm onClose={handleOpenForm}></ProjectForm>}
    </Wrapper>
  );
};

export default Header;
