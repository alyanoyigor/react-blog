export const bookCreateInProgressAction = (state) => {
  state.loading = true;
};

export const bookCreateSuccessAction = (state) => {
  state.loading = false;
};

export const bookCreateErrorAction = (state) => {
  state.loading = true;
};
