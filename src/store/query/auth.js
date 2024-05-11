import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_STORE_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({login, password}) => ({
        url: `/auth/login`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: login,
          password,
        }),
      }),
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginMutation} = authApi