import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/project`;

const url2 = `${process.env.REACT_APP_API_URL}/api/project/detail/person`;

export const getProject = data => getData(`${url}/get`, data);

export const getProjectDetails = data => getData(url2, data);

export const deleteProject = projectId =>
  deleteData({ url: `${url}/delete/${projectId}`, projectId });

export const updateProject = body => {
  const { _id, __v, ...project } = body;
  const req = updateData({
    url: `${url}/update/${_id}`,
    data: project,
  });
  return req;
};

export const addProject = project => {
  const req = addData(`${url}/add`, project);
  return req;
};
