export const bookListFetchStartAction = () => {};

export const bookListAddBookStartAction = (state, action) => {
  state.payload = { bookData: action.payload.bookData };
};

export const bookListAddBookInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookListAddBookErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};

export const bookListAddBookSuccessAction = (state, action) => {
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
