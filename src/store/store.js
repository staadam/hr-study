import { configureStore } from '@reduxjs/toolkit';
import { groupsApi } from './api/groups';
import { notesApi } from './api/notes';
import { studentsApi } from './api/students';

export const { useGetGroupsQuery } = groupsApi;
export const { useGetNotesQuery, useAddNoteMutation, useDeleteNoteMutation } = notesApi;
export const { useGetStudentsDetailsMutation, useSearchStudentsMutation, useGetStudentsByGroupQuery } = studentsApi;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
});
