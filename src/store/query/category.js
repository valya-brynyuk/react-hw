import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_STORE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `/products/categories`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllCategoriesQuery} = categoriesApi