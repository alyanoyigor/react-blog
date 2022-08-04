import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../../types';

import * as actions from '../actions/bookListDeleteBook';

export type BookDeleteState = {
  data: Book | Record<string, never>;
  error: string | null;
  loading: boolean;
};

const initialState: BookDeleteState = {
  data: {},
  error: null,
  loading: false,
};

const BOOK_LIST_DELETE_BOOK_SLICE_NAME = 'BOOK_LIST_DELETE_BOOK_SLICE';

const bookListDeleteBookSlice = createSlice({
  name: BOOK_LIST_DELETE_BOOK_SLICE_NAME,
  initialState,
  reducers: {
    bookDeleteInProgress: actions.bookDeleteInProgressAction,
    bookDeleteSuccess: actions.bookDeleteSuccessAction,
    bookDeleteError: actions.bookDeleteErrorAction,
    bookListGetDeletedBookData: actions.bookListGetDeletedBookDataAction,
    bookListResetDeleteBookData: () => initialState,
  },
});

export const deleteActions = bookListDeleteBookSlice.actions;

export const bookListDeleteBookReducer = bookListDeleteBookSlice.reducer;
