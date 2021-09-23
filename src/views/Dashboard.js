import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';

export const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { group } = useParams();
  console.log(group || groups[0], group, groups[0]);

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${group || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [group, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link to={`/group/${group}`} key={group}>
            {group}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};
