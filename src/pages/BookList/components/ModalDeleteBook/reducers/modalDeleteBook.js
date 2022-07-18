import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/modalDeleteBook';

const initialState = {
  isOpen: false,
};

const modalDeleteBookSliceName = String(Symbol('MODAL_DELETE_BOOK_SLICE'));

const modalDeleteBookSlice = createSlice({
  name: modalDeleteBookSliceName,
  initialState,
  reducers: {
    modalDeleteBookToggleOpen: actions.modalDeleteBookToggleOpenAction,
  },
});

export const { modalDeleteBookToggleOpen } = modalDeleteBookSlice.actions;

export default modalDeleteBookSlice.reducer;
