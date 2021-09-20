import { useContext } from 'react';
import { StyledList } from './UserList.styles';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UserListItem } from 'components/molecules/UserListItem/UserListItem';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users, deleteUser } = useContext(UsersContext);

  return (
    <>
      <ViewWrapper>
        <StyledTitle>Users list</StyledTitle>
        <StyledList>
          {users.map((user, i) => (
            <UserListItem deleteUser={deleteUser} index={i} user={user} key={user.name} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

export default UsersList;
