import { createSlice } from '@reduxjs/toolkit';
import { modalOpenAction, modalCloseAction } from '../actions/modal';
import { MODAL_NAME } from '../constants/modal';

export type SliceState = {
  open: boolean;
  name: MODAL_NAME | null;
};

const initialState: SliceState = { open: false, name: null };

const MODAL_SLICE_NAME = 'MODAL_SLICE';

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: { modalOpen: modalOpenAction, modalClose: modalCloseAction },
});

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalSlice.reducer;
