import { createSlice } from '@reduxjs/toolkit';

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
    bookDeleteInProgress: actions.bookDeleteInProgressAction,
    bookDeleteSuccess: actions.bookDeleteSuccessAction,
    bookDeleteError: actions.bookDeleteErrorAction,
    bookListGetDeletedBookData: actions.bookListGetDeletedBookDataAction,
    bookListResetDeleteBookData: () => initialState,
  },
});

export const deleteActions = bookListDeleteBookSlice.actions;

export const bookListDeleteBookReducer = bookListDeleteBookSlice.reducer;
