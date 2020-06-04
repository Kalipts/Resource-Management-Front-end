import { addData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/auth`;
export const login = async data => addData(`${url}/login`, data);

export const grantPermissionResource = resource => {
  const newObject = {
    resourceId: resource._id,
    role: resource.role,
  };
  const req = addData(`${url}/role/grant`, newObject);
  return req;
};
