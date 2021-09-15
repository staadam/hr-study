import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  max-width: 170px;
  min-width: 130px;
  width: 30%;
  padding: 10px 0 0 0;
  margin: 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  box-shadow: 0px 0 3px ${({ theme: { colors } }) => colors.darkGrey};
`;

export const StyledTitle = styled.h2`
  text-align: right;
  padding: 20px 20px 20px 0px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  & span {
    display: block;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  text-align: right;
  padding: 15px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;

  &.active,
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
  }
`;
