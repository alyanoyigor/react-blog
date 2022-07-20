export const modalOpenAction = (state, action) => {
  state.open = true;
  state.name = action.payload?.name;
};

export const modalCloseAction = (state) => {
  state.open = false;
  state.name = null;
};
