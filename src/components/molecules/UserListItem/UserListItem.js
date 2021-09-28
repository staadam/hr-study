import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import { DeleteButton as Button } from 'components/atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';
import { Attendance } from 'components/atoms/Attendance/Attendance';
import { UsersContext } from 'providers/UsersProvider';

export const UserListItem = ({ index, user: { average, name, attendance }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <Average average={average} />
      <Attendance user={{ name, attendance }} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
};
