import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/">Dashboard</Link>
      <Link to="/add-user">Add user</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </StyledNavigation>
  );
};

export default Navigation;
