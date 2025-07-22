// hooks/useAuthState.js
import { useState, useEffect } from 'react';

// Create a shared event emitter for auth changes
const authEvent = new EventTarget();

export function notifyAuthChange() {
  authEvent.dispatchEvent(new Event('authChange'));
}

export default function useAuthState() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const updateUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser && storedUser !== 'undefined' && storedUser !== 'null') {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error('Failed to parse user data', e);
          localStorage.removeItem('user');
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    // Initial load
    updateUser();

    // Listen to storage events (other tabs)
    const handleStorageChange = () => updateUser();
    
    // Listen to custom events (same tab)
    const handleAuthChange = () => updateUser();

    window.addEventListener('storage', handleStorageChange);
    authEvent.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      authEvent.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  return user;
}