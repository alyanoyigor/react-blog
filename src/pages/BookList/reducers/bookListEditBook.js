import { createSlice } from '@reduxjs/toolkit';
import {
  bookListEditBookStart,
  bookListBeforeEditBookStart,
} from '../thunks/bookListEditBook';

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
    builder
      .addCase(
        bookListEditBookStart.pending,
        actions.bookListEditBookInProgressAction
      )
      .addCase(
        bookListEditBookStart.fulfilled,
        actions.bookListEditBookSuccessAction
      )
      .addCase(
        bookListEditBookStart.rejected,
        actions.bookListEditBookErrorAction
      );
  },
});

export const { bookListEditBookResetData, bookListGetEditBookFetchData } =
  bookListEditBookSlice.actions;

export const bookListEditBookReducer = bookListEditBookSlice.reducer;
