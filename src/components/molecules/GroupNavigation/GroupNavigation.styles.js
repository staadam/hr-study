import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 500px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-decoration: none;
`;
