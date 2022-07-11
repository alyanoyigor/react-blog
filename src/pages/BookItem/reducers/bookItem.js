import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookItemSlice = createSlice({
  name: 'bookItem',
  initialState,
  reducers: {
    bookItemFetchStart: (_state, action) => ({
      payload: { id: action.payload.id },
    }),
    bookItemFetchInProgress: (state) => {
      state.loading = true;
      state.error = null;
    },
    bookItemFetchSuccess: (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.loading = false;
    },
    bookItemFetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  bookItemFetchStart,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
  bookItemFetchError,
} = bookItemSlice.actions;

export default bookItemSlice.reducer;
