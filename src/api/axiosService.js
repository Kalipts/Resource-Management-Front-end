import axios from 'axios';
const setupConfigForAuth = async config => {
  const token = await localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  if (token) config.headers.Authorization = `${token}`;
  return config;
};
const axiosInstance = axios.create({
  timeout: 20000,
  headers: {
    Authorization: 'Bearer token',
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(setupConfigForAuth, error =>
  Promise.reject(error),
);
export function getData(url, data = {}) {
  return axiosInstance({
    url,
    method: 'GET',
    data,
  });
}

export function addData(url, data = {}) {
  return axiosInstance({
    url,
    method: 'POST',
    data,
  });
}

export function updateData({ url, data = {} }) {
  return axiosInstance({
    url,
    method: 'PUT',
    data,
  });
}

export function deleteData({ url, data = {} }) {
  return axiosInstance({
    url,
    method: 'DELETE',
    data,
  });
}
export function addHeaderAxios(nameHeader, token) {
  axiosInstance.defaults.headers.common[nameHeader] = token;
}
export function removeHeaderAxios(nameHeader) {
  axiosInstance.defaults.headers.common[nameHeader] = '';
}
