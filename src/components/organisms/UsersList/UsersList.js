import { StyledList } from './UserList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UserListItem } from 'components/molecules/UserListItem/UserListItem';

const UsersList = ({ users = [] }) => {
  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {users.map((user, i) => (
          <UserListItem index={i} user={user} key={user.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
