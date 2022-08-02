import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/pagination';

export type SliceState = {
  currentPage: number;
  itemsPerPage: number;
};

const initialState: SliceState = {
  currentPage: 1,
  itemsPerPage: 10,
};

const PAGINATION_SLICE_NAME = 'PAGINATION_SLICE';

const paginationSlice = createSlice({
  name: PAGINATION_SLICE_NAME,
  initialState,
  reducers: {
    paginationChangePage: actions.paginationChangePageAction,
    paginationChangeItemsPerPage: actions.paginationChangeItemsPerPageAction,
  },
});

export const { paginationChangePage, paginationChangeItemsPerPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
