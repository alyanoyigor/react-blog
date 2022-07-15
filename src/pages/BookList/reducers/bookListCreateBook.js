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
    bookListCreateBookStart: actions.bookListCreateBookStartAction,
    bookListCreateBookInProgress: actions.bookListCreateBookInProgressAction,
    bookListCreateBookSuccess: actions.bookListCreateBookSuccessAction,
    bookListCreateBookError: actions.bookListCreateBookErrorAction,
  },
});

export const {
  bookListCreateBookInProgress,
  bookListCreateBookStart,
  bookListCreateBookSuccess,
  bookListCreateBookError,
} = bookListCreateBookSlice.actions;

export default bookListCreateBookSlice.reducer;
