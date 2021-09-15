import { Wrapper, StyledList, StyledTitle } from './UserList.styles';
import UserListItem from 'components/molecules/UserListItem/UserListItem';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Users list</StyledTitle>
        <StyledList>
          {users.map((user, i) => (
            <UserListItem deleteUser={deleteUser} index={i} user={user} key={user.name} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
