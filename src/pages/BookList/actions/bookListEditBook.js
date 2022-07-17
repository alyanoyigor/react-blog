export const bookListEditBookInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListEditBookErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const bookListEditBookSuccessAction = (state) => {
  state.data = {};
  state.loading = false;
};

export const bookListBeforeEditBookInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListBeforeEditBookErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const bookListBeforeEditBookSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const bookListEditBookResetDataAction = (state) => {
  state.data = {};
};
