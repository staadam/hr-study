import React from 'react';
import { Dashboard } from 'views/Dashboard';
import { AddUser } from 'views/AddUser';
import { Wrapper } from './Root.styled';
// import UsersProvider from 'providers/UsersProvider';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:group?">
            <Dashboard />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = ({ loginError }) => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onSubmit={handleSubmit(auth.signIn)}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login ? <span>Login is required</span> : null}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password ? <span>Password is required</span> : null}
      <Button isBig type="submit">
        Sign in
      </Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
