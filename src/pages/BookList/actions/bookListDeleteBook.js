export const bookListDeleteBookInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListDeleteBookErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const bookListDeleteBookSuccessAction = (state) => {
  state.loading = false;
};

export const bookListGetDeletedBookDataAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
};
