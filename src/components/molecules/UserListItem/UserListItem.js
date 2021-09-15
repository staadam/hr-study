import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import Avarage from 'components/atoms/Avarage/Avarage';
import Attendence from 'components/atoms/Attendence/Attendence';

const UserListItem = ({ deleteUser, index, user: { avarage, name, attendence } }) => (
  <Wrapper>
    <Avarage avarage={avarage} />
    <Attendence user={{ name, attendence }} />
    <Button onClick={() => deleteUser(name)} />
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
