import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper } from './UserList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      {users.map((user) => (
        <UserListItem user={user} key={user.name} />
      ))}
    </Wrapper>
  );
};

export default UsersList;
