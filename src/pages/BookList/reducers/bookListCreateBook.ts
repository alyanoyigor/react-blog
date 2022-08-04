import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../../types';

import * as actions from '../actions/bookListCreateBook';

export type BookCreateState = {
  data: Book | Record<string, never>;
  error: string | null;
  loading: boolean;
};

const initialState: BookCreateState = {
  data: {},
  error: null,
  loading: false,
};

const BOOK_LIST_CREATE_BOOK_SLICE_NAME = 'BOOK_LIST_CREATE_BOOK_SLICE';

const bookListCreateBookSlice = createSlice({
  name: BOOK_LIST_CREATE_BOOK_SLICE_NAME,
  initialState,
  reducers: {
    bookCreateInProgress: actions.bookCreateInProgressAction,
    bookCreateSuccess: actions.bookCreateSuccessAction,
    bookCreateError: actions.bookCreateErrorAction,
  },
});

export const createActions = bookListCreateBookSlice.actions;

export const bookListCreateBookReducer = bookListCreateBookSlice.reducer;
