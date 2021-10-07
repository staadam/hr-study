import { StyledNav, StyledLink } from './GroupNavigation.styles';
import { Title } from 'components/atoms/Title/Title';

export const GroupNavigation = ({ groups = [], group }) => {
  return (
    <StyledNav>
      <Title>Group {group}</Title>
      {groups.map((group) => (
        <StyledLink to={`/group/${group.id}`} key={group.id}>
          {group.id}
        </StyledLink>
      ))}
    </StyledNav>
  );
};
