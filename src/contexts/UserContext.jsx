import React, { createContext, useState, useEffect } from 'react';
import axios from '../api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
