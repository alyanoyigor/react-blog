import { createSelector } from 'reselect';

const paginationStateSelector = (state) => state.pagination;

export const paginationCurrentPageSelector = createSelector(
  paginationStateSelector,
  (pagination) => pagination.currentPage
);

export const paginationItemsPerPageSelector = createSelector(
  paginationStateSelector,
  (pagination) => pagination.itemsPerPage
);

export const lastItemIndexSelector = createSelector(
  paginationStateSelector,
  ({ itemsPerPage, currentPage }) => itemsPerPage * currentPage
);

export const firstItemIndexSelector = createSelector(
  paginationStateSelector,
  ({ itemsPerPage, currentPage }) => itemsPerPage * currentPage - itemsPerPage
);
