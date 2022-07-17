import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/modalEditBook';

const initialState = {
  isOpen: false,
};

const modalEditBookSliceName = String(Symbol('MODAL_EDIT_BOOK_SLICE'));

const modalEditBookSlice = createSlice({
  name: modalEditBookSliceName,
  initialState,
  reducers: {
    modalEditBookToggleOpen: actions.modalEditBookToggleOpenAction,
  },
});

export const { modalEditBookToggleOpen } = modalEditBookSlice.actions;

export default modalEditBookSlice.reducer;
