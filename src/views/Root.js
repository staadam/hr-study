import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
