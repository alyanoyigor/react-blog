import { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import { StatisticsState } from '../reducers/statistics';

export const statisticsFetchInProgressAction = (state: StatisticsState) => {
  state.loading = true;
  state.error = null;
};

export const statisticsFetchSuccessAction = (
  state: StatisticsState,
  action: PayloadAction<{ data: Book[] }>
) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const statisticsFetchErrorAction = (
  state: StatisticsState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};
