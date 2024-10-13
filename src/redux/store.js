// Import neccesary components

import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import commentReducer from './commentSlice';

//Setting the Redux
const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
  },
});

//Exporting component
export default store;
