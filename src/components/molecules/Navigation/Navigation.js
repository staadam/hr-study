import { useAuth } from 'hooks/useAuth';
import { StyledNavigation, StyledTitle, StyledList, StyledLink } from './Navigation.styles';

export const Navigation = () => {
  const auth = useAuth();

  return (
    <StyledNavigation>
      <StyledTitle>
        <span>Study</span>
        <span>Buddy</span>
      </StyledTitle>
      <StyledList>
        <li>
          <StyledLink to="/group">Dashboard</StyledLink>
        </li>
        <li>
          <StyledLink to="/notes">Notes</StyledLink>
        </li>
        <li>
          <StyledLink as="a" onClick={auth.signOut}>
            Logout
          </StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
};
