import { getData, updateData, deleteData, addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/resource`;
export const getResource = data => getData(`${url}/get`, data);

export const deleteResource = data => {
  const resourceId = data._id;
  return deleteData({ url: `${url}/delete/${resourceId}`, resourceId });
};
export const updateResource = resource => {
  const newResource = {
    jobtitle: resource.jobtitle,
    department: resource.department,
    avatar: resource.avatar,
    name: {
      first: resource.name.first,
      last: resource.name.last,
    },
  };
  const req = updateData({
    url: `${url}/update/${resource._id}`,
    data: newResource,
  });
  return req;
};
export const addResource = resource => {
  const req = addData(`${url}/add`, resource);
  return req;
};
