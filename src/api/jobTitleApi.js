import { getData } from './axiosService';

const url = `${process.env.REACT_APP_API_URL}/api/job`;
export const getJobTitle = data => getData(`${url}/get`, data);
