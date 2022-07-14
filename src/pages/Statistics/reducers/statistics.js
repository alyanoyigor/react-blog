import { createSlice } from '@reduxjs/toolkit';
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
    statisticsFetchStart: actions.statisticsFetchStartAction,
    statisticsFetchInProgress: actions.statisticsFetchInProgressAction,
    statisticsFetchSuccess: actions.statisticsFetchSuccessAction,
    statisticsFetchError: actions.statisticsFetchErrorAction,
  },
});

export const {
  statisticsFetchStart,
  statisticsFetchInProgress,
  statisticsFetchSuccess,
  statisticsFetchError,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
