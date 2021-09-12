import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Button from 'components/atoms/Button/Button';

const UserListItem = ({ user: { avarage, name, attendence } }) => (
  <Wrapper>
    <div>{avarage}</div>
    <div>
      <p>{name}</p>
      <p>attendence: {attendence}</p>
    </div>
    <Button />
  </Wrapper>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    avarage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string.isRequired,
  }),
};

export default UserListItem;
