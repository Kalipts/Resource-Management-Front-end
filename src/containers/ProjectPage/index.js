import React, { useContext, useState, useEffect } from 'react';

import StyledProject from './Style/StyledProject';

import Header from './Header';
import GridProject from './GridProject';
import Menu from './Menu';
import ListProjects from './ListProjects';
import PaginationProject from './PaginationProject';
import { ProjectContext } from '../../context/Project';

const Project = () => {
  const { projects } = useContext(ProjectContext);
  const [isLoading, setIsLoading] = useState(false);
  const [listProjects, setListProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const getCurrentProjects = () => {
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = listProjects.slice(indexOfFirst, indexOfLast);
    return currentProjects;
  };
  const handleFilter = items => {
    setListProjects(items);
    setCurrentPage(1);
  };
  useEffect(() => {
    setIsLoading(true);
    setListProjects(projects);
    setIsLoading(false);
  }, [projects]);

  return (
    <StyledProject>
      <Header />
      <Menu projects={projects} onFilter={handleFilter} />
      <GridProject title="true" />
      {!isLoading && <ListProjects projects={getCurrentProjects()} />}
      <PaginationProject
        onChangePage={handleChangePage}
        currentPage={currentPage}
        count={Math.ceil(listProjects.length / projectsPerPage)}
      />
    </StyledProject>
  );
};

export default Project;
