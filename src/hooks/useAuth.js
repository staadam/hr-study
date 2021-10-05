import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', { headers: { authorization: `Bearer ${token}` } });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', { login, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      // setError('Please provide valid user data');
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs tobe used inside AuthContext');
  }

  return auth;
};
