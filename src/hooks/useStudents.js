import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log('fetching error'));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${groupId || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log('fetching error'));
  }, [groupId, groups]);

  const getMatchingStudents = async (searchedPhrase) => {
    try {
      const res = await axios.post(`/students/search`, { studentName: searchedPhrase });
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { students, groups, getMatchingStudents };
};
