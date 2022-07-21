import { createSlice } from '@reduxjs/toolkit';
import { statisticsFetchStart } from '../thunks/statistics';

import * as actions from '../actions/statistics';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsSliceName = String(Symbol('STATISTICS_SLICE'));

const statisticsSlice = createSlice({
  name: statisticsSliceName,
  initialState,
  reducers: {
    statisticsResetData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        statisticsFetchStart.pending,
        actions.statisticsFetchInProgressAction
      )
      .addCase(
        statisticsFetchStart.fulfilled,
        actions.statisticsFetchSuccessAction
      )
      .addCase(
        statisticsFetchStart.rejected,
        actions.statisticsFetchErrorAction
      );
  },
});

export const { statisticsResetData } = statisticsSlice.actions;

export default statisticsSlice.reducer;
