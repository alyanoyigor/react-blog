import { PayloadAction } from '@reduxjs/toolkit';
import { SliceState } from './../reducer/pagination';

export const paginationChangePageAction = (
  state: SliceState,
  action: PayloadAction<{ page: number }>
) => {
  const { page } = action.payload;
  state.currentPage = page;
};

export const paginationChangeItemsPerPageAction = (
  state: SliceState,
  action: PayloadAction<{ itemsPerPage: number }>
) => {
  const { itemsPerPage } = action.payload;
  state.itemsPerPage = itemsPerPage;
};
