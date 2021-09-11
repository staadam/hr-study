import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ user: { avarage, name, attendence } }) => (
  <li key={name}>
    <div>{avarage}</div>
    <div>
      <p>{name}</p>
      <p>attendence: {attendence}</p>
    </div>
    <button>X</button>
  </li>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    avarage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendence: PropTypes.string.isRequired,
  }),
};

export default UserListItem;
