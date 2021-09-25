import { StyledNavigation, StyledTitle, StyledList, StyledLink } from './Navigation.styles';

export const Navigation = () => {
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
          <StyledLink to="/add-user">Add user</StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
};
