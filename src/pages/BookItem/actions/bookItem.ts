import { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import { BookItemState } from '../reducers/bookItem';

export const bookItemFetchInProgressAction = (state: BookItemState) => {
  state.loading = true;
  state.error = null;
};

export const bookItemFetchSuccessAction = (
  state: BookItemState,
  action: PayloadAction<{ data: Book }>
) => {
  const { data } = action.payload;

  state.data = data;
  state.loading = false;
};

export const bookItemFetchErrorAction = (
  state: BookItemState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};
