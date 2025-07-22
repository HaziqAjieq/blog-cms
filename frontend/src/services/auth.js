import api from "./api/axios";

export const login = async (username, password) => {
  const response = await api.post("/auth/login", { username, password });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
 
  return response.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
  localStorage.removeItem("user");
};

export const register = (userData) => {
  return api.post("/auth/register", userData);
};

export const deleteUser = (userId) => {
  return api.delete(`/auth/users/${userId}`);
};
