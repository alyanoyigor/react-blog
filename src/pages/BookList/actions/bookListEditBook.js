export const bookListEditBookInProgressAction = (state) => {
  state.submitLoading = true;
  state.error = null;
};

export const bookListEditBookErrorAction = (state) => {
  state.submitLoading = false;
  state.error = true;
};

export const bookListEditBookSuccessAction = (state) => {
  state.submitLoading = false;
};

export const bookListBeforeEditBookInProgressAction = (state) => {
  state.fetchLoading = true;
  state.error = null;
};

export const bookListBeforeEditBookErrorAction = (state) => {
  state.fetchLoading = false;
  state.error = true;
};

export const bookListBeforeEditBookSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.fetchLoading = false;
};

export const bookListGetEditBookFetchDataAction = (state, action) => {
  const { data } = action.payload;
  state.fetchData = data;
};
