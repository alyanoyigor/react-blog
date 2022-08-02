import { createSlice } from '@reduxjs/toolkit';
import { Book } from './../../../types';
import { statisticsFetchStart } from '../thunks/statistics';

import * as actions from '../actions/statistics';

export type SliceState = {
  data: Book[];
  error: string | null;
  loading: boolean;
};

const initialState: SliceState = {
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
        statisticsFetchStart.pending.type,
        actions.statisticsFetchInProgressAction
      )
      .addCase(
        statisticsFetchStart.fulfilled.type,
        actions.statisticsFetchSuccessAction
      )
      .addCase(
        statisticsFetchStart.rejected.type,
        actions.statisticsFetchErrorAction
      );
  },
});

export const { statisticsResetData } = statisticsSlice.actions;

export default statisticsSlice.reducer;
