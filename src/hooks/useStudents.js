import axios from 'axios';
import { useCallback } from 'react';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get(`/groups`);
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await studentsAPI.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsById = useCallback(async (id) => {
    try {
      const res = await studentsAPI.get(`/students/${id}`);
      return res.data.student;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getMatchingStudents = async (searchedPhrase) => {
    try {
      const res = await studentsAPI.post(`/students/search`, { studentName: searchedPhrase });
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { getGroups, getStudentsByGroup, getMatchingStudents, getStudentsById };
};
