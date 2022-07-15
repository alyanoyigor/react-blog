import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/bookList';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookListSliceName = String(Symbol('BOOK_LIST_SLICE'));

const bookListSlice = createSlice({
  name: bookListSliceName,
  initialState,
  reducers: {
    bookListCreateBookStart: actions.bookListCreateBookStartAction,
    bookListCreateBookInProgress: actions.bookListCreateBookInProgressAction,
    bookListCreateBookSuccess: actions.bookListCreateBookSuccessAction,
    bookListCreateBookError: actions.bookListCreateBookErrorAction,
    bookListFetchStart: actions.bookListFetchStartAction,
    bookListFetchInProgress: actions.bookListFetchInProgressAction,
    bookListFetchSuccess: actions.bookListFetchSuccessAction,
    bookListFetchError: actions.bookListFetchErrorAction,
  },
});

export const {
  bookListCreateBookInProgress,
  bookListCreateBookStart,
  bookListCreateBookSuccess,
  bookListCreateBookError,
  bookListFetchStart,
  bookListFetchInProgress,
  bookListFetchSuccess,
  bookListFetchError,
} = bookListSlice.actions;

export default bookListSlice.reducer;
