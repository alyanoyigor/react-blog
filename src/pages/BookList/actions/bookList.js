export const bookListFetchStartAction = () => {};

export const bookListCreateBookStartAction = (_state, action) => {
  action.payload = { bookData: action.payload.bookData };
};

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
  state.data.push(data);
  state.loading = false;
};

export const bookListFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListFetchSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const bookListFetchErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};
