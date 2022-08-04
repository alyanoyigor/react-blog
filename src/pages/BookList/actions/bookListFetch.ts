import { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import { BookListFetchState } from '../reducers/bookListFetch';

export const bookListFetchInProgressAction = (state: BookListFetchState) => {
  state.loading = true;
  state.error = null;
};

export const bookListFetchSuccessAction = (
  state: BookListFetchState,
  action: PayloadAction<{ data: Book[] }>
) => {
  const { data } = action.payload;

  state.data = data;
  state.loading = false;
};

export const bookListFetchErrorAction = (
  state: BookListFetchState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};
