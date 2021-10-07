import { StyledList } from './UserList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserListItem } from 'components/molecules/UserListItem/UserListItem';

const UsersList = ({ users = [], handleOpenStudentDetails }) => {
  return (
    <>
      <Title>Users list</Title>
      <StyledList>
        {users.map((user, i) => (
          <UserListItem index={i} user={user} key={user.name} onClick={() => handleOpenStudentDetails(user.id)} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
