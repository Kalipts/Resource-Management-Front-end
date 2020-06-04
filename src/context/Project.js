/* eslint-disable react/prop-types */
import React, { useState, useEffect, createContext } from 'react';

import { getProjectDetails, getProject } from '../api/projectApi';
import { projectDetail } from '../utils/Project';

const ProjectContext = createContext();

const ProjectProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectsActive, setProjectsActive] = useState([]);
  const fetchProject = async () => {
    setIsLoading(true);
    const res1 = await getProjectDetails();
    const res2 = await getProject();
    const result1 = res1.data.projects;
    const result2 = res2.data.projects;
    setProjects(result1);
    setProjectsActive(result2);
    setIsLoading(false);
  };
  const handleSetProject = (project, edit) => {
    let projectWithDetail;
    if (!edit) {
      projectWithDetail = projectDetail(project);
      setProjects([projectWithDetail, ...projects]);
      if (project.active) setProjectsActive([project, ...projects]);
      return;
    }
    if (typeof project.pm.name === 'object') {
      projectWithDetail = project;
    } else projectWithDetail = projectDetail(project);
    const newProjects = projects.map(e => {
      if (e._id === project._id) return projectWithDetail;
      return e;
    });
    setProjects(newProjects);
    if (project.active) {
      const rawProjects = projects.map(e => {
        if (e._id === project._id) return project;
        return e;
      });
      setProjectsActive(rawProjects);
      return;
    }
    const filterProjects = projects.filter(e => e._id !== project._id);
    setProjectsActive(filterProjects);
  };
  const handleDeleteProject = _id => {
    const filterProjects = projects.filter(project => project._id !== _id);
    setProjects(filterProjects);
  };
  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        projectsActive,
        isLoading,
        handleSetProject,
        handleDeleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
