import { createSlice } from '@reduxjs/toolkit';
import { bookItemFetchStart } from '../thunks/bookItem';

import * as actions from '../actions/bookItem';
import { Book } from '../../../types';

export type BookItemState = {
  data: Book | Record<string, never>;
  error: string | null;
  loading: boolean;
};

const initialState: BookItemState = {
  data: {},
  error: null,
  loading: true,
};

const BOOK_ITEM_SLICE_NAME = 'BOOK_ITEM_SLICE';

const bookItemSlice = createSlice({
  name: BOOK_ITEM_SLICE_NAME,
  initialState,
  reducers: {
    bookItemResetData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        bookItemFetchStart.pending.type,
        actions.bookItemFetchInProgressAction
      )
      .addCase(
        bookItemFetchStart.fulfilled.type,
        actions.bookItemFetchSuccessAction
      )
      .addCase(
        bookItemFetchStart.rejected.type,
        actions.bookItemFetchErrorAction
      );
  },
});

export const { bookItemResetData } = bookItemSlice.actions;

export default bookItemSlice.reducer;
