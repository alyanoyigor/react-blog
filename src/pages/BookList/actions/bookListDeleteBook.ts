import { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import { BookDeleteState } from '../reducers/bookListDeleteBook';

export const bookDeleteInProgressAction = (state: BookDeleteState) => {
  state.loading = true;
  state.error = null;
};

export const bookDeleteSuccessAction = (state: BookDeleteState) => {
  state.loading = false;
};

export const bookDeleteErrorAction = (
  state: BookDeleteState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};

export const bookListGetDeletedBookDataAction = (
  state: BookDeleteState,
  action: PayloadAction<{ data: Book }>
) => {
  const { data } = action.payload;
  state.data = data;
};
