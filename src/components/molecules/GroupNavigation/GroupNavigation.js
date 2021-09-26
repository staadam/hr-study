import { StyledNav, StyledLink } from './GroupNavigation.styles';
import { StyledTitle } from 'components/atoms/Title/Title';

export const GroupNavigation = ({ groups = [], group }) => {
  return (
    <StyledNav>
      <StyledTitle>Group {group}</StyledTitle>
      {groups.map((group) => (
        <StyledLink to={`/group/${group}`} key={group}>
          {group}
        </StyledLink>
      ))}
    </StyledNav>
  );
};
