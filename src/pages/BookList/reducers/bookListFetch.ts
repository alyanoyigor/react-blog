import { createSlice } from '@reduxjs/toolkit';
import { bookListFetchStart } from '../thunks/bookListFetch';

import * as actions from '../actions/bookListFetch';
import { Book } from '../../../types';

export type BookListFetchState = {
  data: Book[];
  error: string | null;
  loading: boolean;
};

const initialState: BookListFetchState = {
  data: [],
  error: null,
  loading: true,
};

const BOOK_LIST_FETCH_SLICE_NAME = 'BOOK_LIST_FETCH_SLICE';

const bookListFetchSlice = createSlice({
  name: BOOK_LIST_FETCH_SLICE_NAME,
  initialState,
  reducers: {
    bookListResetData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        bookListFetchStart.pending.type,
        actions.bookListFetchInProgressAction
      )
      .addCase(
        bookListFetchStart.fulfilled.type,
        actions.bookListFetchSuccessAction
      )
      .addCase(
        bookListFetchStart.rejected.type,
        actions.bookListFetchErrorAction
      );
  },
});

export const { bookListResetData } = bookListFetchSlice.actions;

export const bookListFetch = bookListFetchSlice.reducer;
