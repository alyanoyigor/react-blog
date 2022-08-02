import { PayloadAction } from '@reduxjs/toolkit';
import { MODAL_NAME } from '../constants/modal';
import { SliceState } from '../reducer/modal';

export const modalOpenAction = (
  state: SliceState,
  action: PayloadAction<{ name: MODAL_NAME }>
) => {
  const { name } = action.payload;

  state.open = true;
  state.name = name;
};

export const modalCloseAction = (state: SliceState) => {
  state.open = false;
  state.name = null;
};
