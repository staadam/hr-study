import React, { useState } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = React.createContext({
  users: [],
  deleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const { name, attendence, avarage } = formValues;

    const newUser = {
      name,
      attendence,
      avarage,
    };

    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        deleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
