import { createSlice } from '@reduxjs/toolkit';

const fetchPosts = async (page) => {
  const limit = 10;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  return response.json();
};

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    hasMore: true,
  },
  reducers: {
    fetchPostsStart(state) {
      state.status = 'loading';
    },
    fetchPostsSuccess(state, action) {
      state.status = 'succeeded';
      state.posts = [...state.posts, ...action.payload];
      state.currentPage += 1;
      if (action.payload.length < 10) {
        state.hasMore = false;
      }
    },
    fetchPostsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postSlice.actions;

export default postSlice.reducer;

export const fetchPostsThunk = (page) => async (dispatch) => {
  dispatch(fetchPostsStart());
  try {
    const posts = await fetchPosts(page);
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};
