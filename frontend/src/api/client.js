import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Consolidated API functions
export const fetchPosts = () => apiClient.get('/posts');
export const getPost = (id) => apiClient.get(`/posts/${id}`);