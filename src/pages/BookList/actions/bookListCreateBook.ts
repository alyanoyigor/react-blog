import { PayloadAction } from '@reduxjs/toolkit';
import { BookCreateState } from '../reducers/bookListCreateBook';

export const bookCreateInProgressAction = (state: BookCreateState) => {
  state.loading = true;
  state.error = null;
};

export const bookCreateSuccessAction = (state: BookCreateState) => {
  state.loading = false;
};

export const bookCreateErrorAction = (
  state: BookCreateState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};
