import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/modalCreateBook';

const initialState = {
  isOpen: false,
};

const modalCreateBookSliceName = String(Symbol('MODAL_CREATE_BOOK_SLICE'));

const modalCreateBookSlice = createSlice({
  name: modalCreateBookSliceName,
  initialState,
  reducers: {
    modalCreateBookToggleOpen: actions.modalCreateBookToggleOpenAction,
  },
});

export const { modalCreateBookToggleOpen } = modalCreateBookSlice.actions;

export default modalCreateBookSlice.reducer;
