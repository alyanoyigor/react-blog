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
    bookListAddBookStart: actions.bookListAddBookStartAction,
    bookListAddBookInProgress: actions.bookListAddBookInProgressAction,
    bookListAddBookSuccess: actions.bookListAddBookSuccessAction,
    bookListAddBookError: actions.bookListAddBookErrorAction,
    bookListFetchStart: actions.bookListFetchStartAction,
    bookListFetchInProgress: actions.bookListFetchInProgressAction,
    bookListFetchSuccess: actions.bookListFetchSuccessAction,
    bookListFetchError: actions.bookListFetchErrorAction,
  },
});

export const {
  bookListAddBookInProgress,
  bookListAddBookStart,
  bookListAddBookSuccess,
  bookListAddBookError,
  bookListFetchStart,
  bookListFetchInProgress,
  bookListFetchSuccess,
  bookListFetchError,
} = bookListSlice.actions;

export default bookListSlice.reducer;
