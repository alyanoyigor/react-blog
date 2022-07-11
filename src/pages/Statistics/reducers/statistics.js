import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    statisticsFetchStart: () => {},
    statisticsFetchInProgress: (state) => {
      state.loading = true;
      state.error = null;
    },
    statisticsFetchSuccess: (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.loading = false;
    },
    statisticsFetchError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  statisticsFetchStart,
  statisticsFetchInProgress,
  statisticsFetchSuccess,
  statisticsFetchError,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
