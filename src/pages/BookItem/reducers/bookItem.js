import { createSlice } from '@reduxjs/toolkit';
import { bookItemFetchStart } from '../thunks/bookItem';

import * as actions from '../actions/bookItem';

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookItemSliceName = String(Symbol('BOOK_ITEM_SLICE'));

const bookItemSlice = createSlice({
  name: bookItemSliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        bookItemFetchStart.pending,
        actions.bookItemFetchInProgressAction
      )
      .addCase(bookItemFetchStart.fulfilled, actions.bookItemFetchSuccessAction)
      .addCase(bookItemFetchStart.rejected, actions.bookItemFetchErrorAction);
  },
});

export default bookItemSlice.reducer;
