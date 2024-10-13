//Import neccesary components
import { createSlice } from '@reduxjs/toolkit';



const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json(); 
};


const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [], 
    status: 'idle', 
    error: null, 
  },
  
  reducers: {

    fetchPostsStart(state) {
      state.status = 'loading'; 
    },

    fetchPostsSuccess(state, action) {
      state.status = 'succeeded'; 
      state.posts = action.payload; 
    },

    fetchPostsFailure(state, action) {
      state.status = 'failed'; 
      state.error = action.payload; 
    },
  },
});




export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postSlice.actions;

 export default postSlice.reducer;


 export const fetchPostsThunk = () => async (dispatch) => {
  dispatch(fetchPostsStart()); 
  try {
    const posts = await fetchPosts(); 
    dispatch(fetchPostsSuccess(posts)); 
  } catch (error) {
    dispatch(fetchPostsFailure(error.message)); 
  }
};