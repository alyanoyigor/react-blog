export const statisticsFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const statisticsFetchSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const statisticsFetchErrorAction = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
