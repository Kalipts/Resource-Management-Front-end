import React, { useState, useEffect, createContext } from 'react';
import {
  deleteResource,
  getResource,
  addResource,
  updateResource,
} from '../api/resourceApi';
import { getJobTitle } from '../api/jobTitleApi';
import { getDepartment } from '../api/departmentApi';

const ResourceContext = createContext();

const ResourceProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [jobs, setJobs] = useState([]);
  const [departments, setDepartments] = useState([]);
  const fetchResource = async () => {
    setIsLoading(true);
    const res = await getResource();
    const resJob = await getJobTitle();
    const resultJob = resJob.data.jobs;
    const resDepart = await getDepartment();
    const resultDepart = resDepart.data.departments;
    setDepartments(resultDepart);

    setJobs(resultJob);
    const result = res.data.resources;
    let personsFilter = result.map(resource => {
      const person = {
        _id: resource._id,
        name: `${resource.name.first} ${resource.name.last}`,
        firstName: resource.name.first,
        lastName: resource.name.last,
        permission: resource.user.role,
        email: '',
        jobtitle: resource.jobtitle,
        department: resource.department,
        avatar: resource.avatar,
      };

      return person;
    });
    personsFilter = personsFilter.reverse();
    setPersons(personsFilter);
    setSearchResult(personsFilter);
    setIsLoading(false);
  };

  const updateResourceContext = resource => {
    updateResource(resource);
  };

  const removeResource = async resource => {
    setIsLoading(true);
    await deleteResource(resource);
    const newResources = persons.filter(person => person._id !== resource._id);
    setPersons(newResources);
    setIsLoading(false);
  };

  const removeSelected = async resources => {
    const arr = persons.filter(function(item) {
      return resources.indexOf(item._id) === -1;
    });
    setPersons(arr);
  };

  const addPerson = async resource => {
    setIsLoading(true);
    await addResource(resource);
    const newResource = [...persons, resource];
    setPersons(newResource);
    setIsLoading(false);
  };

  const updatePerson = async resource => {
    setIsLoading(true);
    // await addResource(resource);
    const newResource = [...persons, ...resource];
    setPersons(newResource);
    setIsLoading(false);
  };
  const updateSearch = event => {
    setSearch(event.target.value.toLowerCase());
  };

  useEffect(() => {
    fetchResource();
  }, []);

  useEffect(() => {
    const filteredResults = persons.filter(
      item => item.name.toLowerCase().indexOf(search) !== -1,
    );
    setSearchResult(filteredResults);
  }, [search, persons]);
  return (
    <ResourceContext.Provider
      value={{
        persons,
        searchResult,
        search,
        updateSearch,
        isLoading,
        fetchResource,
        updateResourceContext,
        removeResource,
        addPerson,
        removeSelected,
        jobs,
        departments,
      }}
    >
      {props.children}
    </ResourceContext.Provider>
  );
};

export { ResourceProvider, ResourceContext };
