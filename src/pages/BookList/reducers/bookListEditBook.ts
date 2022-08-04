import { createSlice } from '@reduxjs/toolkit';
import { bookListBeforeEditBookStart } from '../thunks/bookListEditBook';

import * as actions from '../actions/bookListEditBook';
import { Book, BookCreate, BookUpdate } from '../../../types';

export type BookEditState = {
  data: BookCreate | BookUpdate | Record<string, never>;
  fetchData: Book | Record<string, never>;
  error: string | null;
  submitLoading: boolean;
  fetchLoading: boolean;
};

const initialState: BookEditState = {
  data: {},
  fetchData: {},
  error: null,
  submitLoading: false,
  fetchLoading: true,
};

const BOOK_LIST_EDIT_BOOK_SLICE_NAME = 'BOOK_LIST_EDIT_BOOK_SLICE';

const bookListEditBookSlice = createSlice({
  name: BOOK_LIST_EDIT_BOOK_SLICE_NAME,
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
        bookListBeforeEditBookStart.pending.type,
        actions.bookListBeforeEditBookInProgressAction
      )
      .addCase(
        bookListBeforeEditBookStart.fulfilled.type,
        actions.bookListBeforeEditBookSuccessAction
      )
      .addCase(
        bookListBeforeEditBookStart.rejected.type,
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
