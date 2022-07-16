export const bookListCreateBookInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListCreateBookErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const bookListCreateBookSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};
