import { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import { SliceState } from '../reducers/statistics';

export const statisticsFetchInProgressAction = (state: SliceState) => {
  state.loading = true;
  state.error = null;
};

export const statisticsFetchSuccessAction = (
  state: SliceState,
  action: PayloadAction<{ data: Book[] }>
) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const statisticsFetchErrorAction = (
  state: SliceState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};
