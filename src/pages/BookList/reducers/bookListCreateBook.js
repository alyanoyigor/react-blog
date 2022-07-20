import { createSlice } from '@reduxjs/toolkit';

import * as actions from '../actions/bookListCreateBook';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const bookListCreateBookSliceName = String(
  Symbol('BOOK_LIST_CREATE_BOOK_SLICE')
);

const bookListCreateBookSlice = createSlice({
  name: bookListCreateBookSliceName,
  initialState,
  reducers: {
    bookCreateInProgress: actions.bookCreateInProgressAction,
    bookCreateSuccess: actions.bookCreateSuccessAction,
    bookCreateError: actions.bookCreateErrorAction,
  },
});

export const createActions = bookListCreateBookSlice.actions;

export const bookListCreateBookReducer = bookListCreateBookSlice.reducer;
