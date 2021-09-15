import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper } from './UserList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([...usersData]);
      } else {
        reject({ message: 'error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setIsLoading(true);

    mockAPI(true)
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading' : "User's list"}</h1>
      {users.map((user, i) => (
        <UserListItem deleteUser={deleteUser} index={i} user={user} key={user.name} />
      ))}
    </Wrapper>
  );
};

export default UsersList;
