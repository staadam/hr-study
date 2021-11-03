import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['groups'],
  reducerPath: 'groupsApi',
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
  }),
});
