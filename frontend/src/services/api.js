import axios from 'axios';
import { API_BASE_URL } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor for auth token if needed
api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getPosts = () => api.get('/posts');
export const getPost = (id) => api.get(`/posts/${id}`);
// export const createPost = (data) => api.post('/posts', data);
// export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
// export const deletePost = (id) => api.delete(`/posts/${id}`);

export default api;

// this file is for getting api route and easily transfer it into component for the web