import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' }) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    console.log(groupId, groups[0]);
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log('fetching error'));
  }, []);

  useEffect(() => {
    console.log(groupId, groups[0]);
    axios
      .get(`/students/${groupId || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log('fetching error'));
  }, [groupId, groups]);

  return { students, groups };
};
