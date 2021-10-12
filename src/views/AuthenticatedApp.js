import { Dashboard } from 'views/Dashboard';
import { Notes } from './Notes';
import { Wrapper } from './Root.styled';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Switch, Route, Redirect } from 'react-router-dom';

export const AuthenticatedApp = () => {
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
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};
