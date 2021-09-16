import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import { Dashboard } from 'views/Dashboard';
import { AddUser } from 'views/AddUser';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const initialFormState = {
  name: '',
  attendence: '',
  avarage: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const { name, attendence, avarage } = formValues;

    const newUser = {
      name,
      attendence,
      avarage,
    };

    setUsers((prevState) => {
      return [newUser, ...prevState];
    });

    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
              <Route path="/add-user">
                <AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
