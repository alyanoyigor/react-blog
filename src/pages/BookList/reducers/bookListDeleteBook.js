import { createSlice } from '@reduxjs/toolkit';
import { bookListDeleteBookStart } from '../thunks/bookListDeleteBook';

import * as actions from '../actions/bookListDeleteBook';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const bookListDeleteBookSliceName = String(
  Symbol('BOOK_LIST_DELETE_BOOK_SLICE')
);

const bookListDeleteBookSlice = createSlice({
  name: bookListDeleteBookSliceName,
  initialState,
  reducers: {
    bookListGetDeletedBookData: actions.bookListGetDeletedBookDataAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        bookListDeleteBookStart.pending,
        actions.bookListDeleteBookInProgressAction
      )
      .addCase(
        bookListDeleteBookStart.fulfilled,
        actions.bookListDeleteBookSuccessAction
      )
      .addCase(
        bookListDeleteBookStart.rejected,
        actions.bookListDeleteBookErrorAction
      );
  },
});

export const { bookListGetDeletedBookData } = bookListDeleteBookSlice.actions;

export const bookListDeleteBookReducer = bookListDeleteBookSlice.reducer;
