import { PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../../types';
import { BookEditState } from '../reducers/bookListEditBook';

export const bookListEditBookInProgressAction = (state: BookEditState) => {
  state.submitLoading = true;
  state.error = null;
};

export const bookListEditBookErrorAction = (
  state: BookEditState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.submitLoading = false;
  state.error = error;
};

export const bookListEditBookSuccessAction = (state: BookEditState) => {
  state.submitLoading = false;
};

export const bookListBeforeEditBookInProgressAction = (
  state: BookEditState
) => {
  state.fetchLoading = true;
  state.error = null;
};

export const bookListBeforeEditBookErrorAction = (
  state: BookEditState,
  action: PayloadAction<{ error: string }>
) => {
  const { error } = action.payload;

  state.fetchLoading = false;
  state.error = error;
};

export const bookListBeforeEditBookSuccessAction = (
  state: BookEditState,
  action: PayloadAction<{ data: Book }>
) => {
  const { data } = action.payload;

  state.data = data;
  state.fetchLoading = false;
};

export const bookListGetEditBookFetchDataAction = (
  state: BookEditState,
  action: PayloadAction<{ data: Book }>
) => {
  const { data } = action.payload;
  state.fetchData = data;
};
