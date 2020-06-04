import { getData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/department`;
export const getDepartment = data => getData(`${url}/get`, data);
