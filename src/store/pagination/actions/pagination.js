export const paginationChangePageAction = (state, action) => {
  const { page } = action.payload;
  state.currentPage = page;
};

export const paginationChangeItemsPerPageAction = (state, action) => {
  const { itemsPerPage } = action.payload;
  state.itemsPerPage = itemsPerPage;
};
