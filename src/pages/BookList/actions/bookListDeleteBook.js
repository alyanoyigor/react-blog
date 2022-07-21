export const bookDeleteInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookDeleteSuccessAction = (state) => {
  state.loading = false;
};

export const bookDeleteErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const bookListGetDeletedBookDataAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
};
