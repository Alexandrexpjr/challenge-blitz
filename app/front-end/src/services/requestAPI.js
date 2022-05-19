import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3005',
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const changeStatus = async (endpoint, body) => {
  await api.put(endpoint, body);
};

export const createTask = async (endpoint, body) => {
  await api.post(endpoint, body);
}

export default api;