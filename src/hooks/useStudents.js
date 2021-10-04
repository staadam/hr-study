import axios from 'axios';
import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get(`/groups`);
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsById = useCallback(async (id) => {
    try {
      const res = await axios.get(`/students/${id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getMatchingStudents = async (searchedPhrase) => {
    try {
      const res = await axios.post(`/students/search`, { studentName: searchedPhrase });
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { getGroups, getStudentsByGroup, getMatchingStudents, getStudentsById };
};
