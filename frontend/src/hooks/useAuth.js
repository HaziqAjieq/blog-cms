// hooks/useAuth.js
import { useState } from "react";
import { login, logout, register } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { notifyAuthChange } from './useAuthState'

export function useAuth() {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage if exists
    const storedUser = localStorage.getItem("user");
    if (storedUser === null || storedUser === "undefined") {
      

      return null;
    }
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    setError(null);
    
    
    try {
      const userData = await login(username, password);
      setUser(userData);
      notifyAuthChange() 
      navigate("/"); // Redirect after successful login
      return userData;
    } catch (err) {
     console.error('Login failed:', error);
      
    }
  };

  const handleRegister = async (userData) => {
    setError(null);

    try {
      const newUser = await register(userData);
      return newUser;
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      throw err;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      localStorage.removeItem("user");
      notifyAuthChange() 
      navigate("/login" , { replace: true });;
    } catch (err) {
      setError("Logout failed");
      console.error("Logout error:", err);
    }
  };

  return {
    user,
    error,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    isAuthenticated: !!user?.token,
  };
}
