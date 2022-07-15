import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/modal';

const initialState = {
  isOpen: false,
};

const modalSliceName = String(Symbol('MODAL_SLICE'));

const modalSlice = createSlice({
  name: modalSliceName,
  initialState,
  reducers: {
    modalToggleOpen: actions.modalToggleOpenAction,
  },
});

export const { modalToggleOpen } = modalSlice.actions;

export default modalSlice.reducer;
