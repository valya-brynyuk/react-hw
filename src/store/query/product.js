import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_STORE_API_URL,
  }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category, limit) => {
        const searchParams = new URLSearchParams({});
        if (limit) {
          searchParams.set('limit', limit);
        }

        return `/products/category/${category}?${searchParams}`;
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return `/products/${id}`;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} = productsApi