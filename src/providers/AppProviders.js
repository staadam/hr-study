import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';

export const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle></GlobalStyle>
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};
