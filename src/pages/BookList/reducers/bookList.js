import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookListSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    bookListFetchStart: () => {},
    bookListFetchInProgress: (state) => {
      state.loading = true;
      state.error = null;
    },
    bookListFetchSuccess: (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.loading = false;
    },
    bookListFetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  bookListFetchStart,
  bookListFetchInProgress,
  bookListFetchSuccess,
  bookListFetchError,
} = bookListSlice.actions;

export default bookListSlice.reducer;
