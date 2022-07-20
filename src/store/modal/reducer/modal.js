import { createSlice } from '@reduxjs/toolkit';

import { modalOpenAction, modalCloseAction } from '../actions/modal';

const MODAL_SLICE_NAME = 'MODAL_SLICE';

const initialState = { open: false, name: null };

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: { modalOpen: modalOpenAction, modalClose: modalCloseAction },
});

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalSlice.reducer;
