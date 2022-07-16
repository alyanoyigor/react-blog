import { createSlice } from '@reduxjs/toolkit';
import { bookListCreateBookStart } from '../thunks/bookListCreateBook';

import * as actions from '../actions/bookListCreateBook';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const bookListCreateBookSliceName = String(
  Symbol('BOOK_LIST_CREATE_BOOK_SLICE')
);

const bookListCreateBookSlice = createSlice({
  name: bookListCreateBookSliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        bookListCreateBookStart.pending,
        actions.bookListCreateBookInProgressAction
      )
      .addCase(
        bookListCreateBookStart.fulfilled,
        actions.bookListCreateBookSuccessAction
      )
      .addCase(
        bookListCreateBookStart.rejected,
        actions.bookListCreateBookErrorAction
      );
  },
});

export default bookListCreateBookSlice.reducer;
