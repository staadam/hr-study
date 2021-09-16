import React from 'react';
import { Dashboard } from 'views/Dashboard';
import { AddUser } from 'views/AddUser';
import { Wrapper } from './Root.styled';
import UsersProvider from 'providers/UsersProvider';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
