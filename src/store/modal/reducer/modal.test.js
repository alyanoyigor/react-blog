import modalReducer from './modal';

test('should return the initial state', () => {
  expect(modalReducer(undefined, { type: undefined })).toEqual({
    open: false,
    name: null,
  });
});
