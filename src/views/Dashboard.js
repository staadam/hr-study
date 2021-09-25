import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Wrapper } from './Dashboard.styled';
import { GroupNavigation } from 'components/molecules/GroupNavigation/GroupNavigation.js';
import { useParams, Redirect } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';

export const Dashboard = () => {
  const { group } = useParams();
  const { students, groups } = useStudents({ groupId: group });

  if (!groups.includes(group)) return <Redirect to="/group/A" />;

  return (
    <Wrapper>
      <GroupNavigation groups={groups} group={group} />
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </Wrapper>
  );
};
