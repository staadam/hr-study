import { StyledList } from './UserList.styles';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import PropTypes from 'prop-types';
import UserListItem from 'components/molecules/UserListItem/UserListItem';

const UsersList = ({ users, deleteUser }) => {
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

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
