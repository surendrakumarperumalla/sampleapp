// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl:"http://localhost:4000/posts" }),
  endpoints: (builder) => ({
    getAllposts: builder.query({
      query: () => `/`,
    }),
    addPost: builder.mutation({
      query:(newpost)=> {
        return {
          url: `/`,
          method: 'POST',
          body:newpost,
        }
      },
  }),
  deletePost: builder.mutation({
    query:(postid)=> {
      return {
        url: `/${postid}`,
        method: 'DELETE',
        
      }
    },
}),
updatePost: builder.mutation({
  query:(post)=> {
    return {
      url: `/${post.id}`,
      method: 'PATCH',
      body:post
    }
  },
}),
})
})    

    
    
  

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllpostsQuery,useAddPostMutation,useDeletePostMutation,useLazyGetAllpostsQuery,useUpdatePostMutation} =postsApi