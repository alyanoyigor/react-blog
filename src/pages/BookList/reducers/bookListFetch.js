import { createSlice } from '@reduxjs/toolkit';
import { bookListFetchStart } from '../thunks/bookListFetch';

import * as actions from '../actions/bookListFetch';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookListFetchSliceName = String(Symbol('BOOK_LIST_FETCH_SLICE'));

const bookListFetchSlice = createSlice({
  name: bookListFetchSliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        bookListFetchStart.pending,
        actions.bookListFetchInProgressAction
      )
      .addCase(bookListFetchStart.fulfilled, actions.bookListFetchSuccessAction)
      .addCase(bookListFetchStart.rejected, actions.bookListFetchErrorAction);
  },
});

export const bookListFetch = bookListFetchSlice.reducer;
