export const bookItemFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookItemFetchSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const bookItemFetchErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

