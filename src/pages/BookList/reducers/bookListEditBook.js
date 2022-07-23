import { createSlice } from '@reduxjs/toolkit';
import { bookListBeforeEditBookStart } from '../thunks/bookListEditBook';

import * as actions from '../actions/bookListEditBook';

const initialState = {
  data: {},
  fetchData: {},
  error: null,
  submitLoading: false,
  fetchLoading: true,
};

const bookListEditBookSliceName = String(Symbol('BOOK_LIST_EDIT_BOOK_SLICE'));

const bookListEditBookSlice = createSlice({
  name: bookListEditBookSliceName,
  initialState,
  reducers: {
    bookEditInProgress: actions.bookListEditBookInProgressAction,
    bookEditSuccess: actions.bookListEditBookSuccessAction,
    bookEditError: actions.bookListEditBookErrorAction,
    bookListEditBookResetData: () => initialState,
    bookListGetEditBookFetchData: actions.bookListGetEditBookFetchDataAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        bookListBeforeEditBookStart.pending,
        actions.bookListBeforeEditBookInProgressAction
      )
      .addCase(
        bookListBeforeEditBookStart.fulfilled,
        actions.bookListBeforeEditBookSuccessAction
      )
      .addCase(
        bookListBeforeEditBookStart.rejected,
        actions.bookListBeforeEditBookErrorAction
      );
  },
});

export const {
  bookListEditBookResetData,
  bookListGetEditBookFetchData,
  bookEditInProgress,
  bookEditSuccess,
  bookEditError,
} = bookListEditBookSlice.actions;

export const bookListEditBookReducer = bookListEditBookSlice.reducer;
