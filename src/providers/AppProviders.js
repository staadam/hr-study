import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const GlobalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const AppProviders = ({ children }) => {
  return (
    <GlobalWrapper>
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ErrorProvider>
              <AuthProvider>
                <GlobalStyle />
                {children}
              </AuthProvider>
            </ErrorProvider>
          </ThemeProvider>
        </Provider>
      </Router>
    </GlobalWrapper>
  );
};
