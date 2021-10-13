import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Students'],
  reducerPath: 'studentsApi',
  endpoints: (builder) => ({
    searchStudents: builder.mutation({
      query: (body) => ({
        url: 'students/search',
        method: 'POST',
        body,
      }),
    }),
    getStudentsDetails: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: 'GET',
        providesTags: ['Notes'],
      }),
    }),
    getStudentsByGroup: builder.query({
      query: (id) => `groups/${id}`,
    }),
    addStudentGrade: builder.mutation({
      query: (body) => ({
        url: `students/grade`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});
