//Import neccesary components
import { createSlice } from '@reduxjs/toolkit';



const fetchComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  return response.json(); 
};


const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [], 
    status: 'idle', 
    error: null, 
  },

  reducers: {
    
    fetchCommentsStart(state) {
      state.status = 'loading'; 
    },
    
    fetchCommentsSuccess(state, action) {
      state.status = 'succeeded'; 
      state.comments = action.payload; 
    },

    fetchCommentsFailure(state, action) {
      state.status = 'failed'; 
      state.error = action.payload; 
    },
  },
});



export const { fetchCommentsStart, fetchCommentsSuccess, fetchCommentsFailure } = commentSlice.actions;

export default commentSlice.reducer;

export const fetchCommentsThunk = () => async (dispatch) => {
  dispatch(fetchCommentsStart()); 
  try {
    const comments = await fetchComments(); 
    dispatch(fetchCommentsSuccess(comments)); 
  } catch (error) {
    dispatch(fetchCommentsFailure(error.message)); 
  }
};