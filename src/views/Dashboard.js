import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Wrapper } from './Dashboard.styled';
import { GroupNavigation } from 'components/molecules/GroupNavigation/GroupNavigation.js';
import { useParams, Redirect } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import React, { useState, useEffect } from 'react';

export const Dashboard = () => {
  const { group } = useParams();
  const { getGroups, getStudentsByGroup } = useStudents();

  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(group);
      setStudents(students);
    })();
  }, [getStudentsByGroup, group]);

  if (!group && groups.length > 0) return <Redirect to="/group/A" />;

  return (
    <Wrapper>
      <GroupNavigation groups={groups} group={group} />
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </Wrapper>
  );
};
