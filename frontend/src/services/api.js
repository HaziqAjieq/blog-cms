import axios from 'axios';

const api = axios.create({
  baseURL:'/api' ,
});

export const getPosts = () => api.get('/posts');