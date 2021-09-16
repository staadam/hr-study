import UsersList from 'components/organisms/UsersList/UsersList';

export const Dashboard = ({ deleteUser, users }) => {
  return <UsersList deleteUser={deleteUser} users={users} />;
};
