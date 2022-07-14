import { createSlice } from '@reduxjs/toolkit';
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
  reducers: {
    bookItemFetchStart: actions.bookItemFetchStartAction,
    bookItemFetchInProgress: actions.bookItemFetchInProgressAction,
    bookItemFetchSuccess: actions.bookItemFetchSuccessAction,
    bookItemFetchError: actions.bookItemFetchErrorAction,
  },
});

export const {
  bookItemFetchStart,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
  bookItemFetchError,
} = bookItemSlice.actions;

export default bookItemSlice.reducer;
