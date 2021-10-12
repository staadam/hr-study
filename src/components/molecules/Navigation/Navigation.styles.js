import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  /* padding: 10px 0 0 0; */
  margin: 0;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  border-right: 1px solid ${({ theme: { colors } }) => colors.darkPurple};
  overflow: hidden;
  grid-row: 1/3;
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 90px 1fr;
`;

export const StyledTitle = styled.h2`
  text-align: right;
  padding: 13px 15px 13px 0px;
  margin: auto 0 0 0;

  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;

  & span {
    display: block;
    padding: 0;
    margin: 0;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: block;
  text-align: right;
  padding: 15px 30px 15px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;

  &.active,
  &:hover {
    cursor: pointer;

    &::after {
      transform: translate(0%, -50%);
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 5px;
    width: 20px;
    transition: transform 0.2s;
    transform: translate(100%, -50%);
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.news {
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
  }
`;

// export const StyledLinkNews = styled.StyledLink
