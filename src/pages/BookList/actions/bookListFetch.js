export const bookListFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListFetchSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const bookListFetchErrorAction = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
