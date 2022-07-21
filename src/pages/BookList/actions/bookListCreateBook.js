export const bookCreateInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookCreateSuccessAction = (state) => {
  state.loading = false;
};

export const bookCreateErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};
