import { StyledList } from './UserList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UserListItem } from 'components/molecules/UserListItem/UserListItem';

const UsersList = ({ users = [], handleOpenStudentDetails }) => {
  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {users.map((user, i) => (
          <UserListItem index={i} user={user} key={user.name} onClick={() => handleOpenStudentDetails(user.id)} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
