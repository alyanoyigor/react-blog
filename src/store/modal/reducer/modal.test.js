import { MODAL_NAME } from '../constants/modal';
import modalReducer, { modalClose, modalOpen } from './modal';

describe('Testing modal reducer', () => {
  const initialState = { open: false, name: null };

  test('should return the initial state', () => {
    expect(modalReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('should open modal and set name', () => {
    expect(
      modalReducer(initialState, modalOpen({ name: MODAL_NAME.BOOK_CREATE }))
    ).toEqual({ open: true, name: MODAL_NAME.BOOK_CREATE });
  });

  test('should close modal and clear name', () => {
    expect(
      modalReducer({ open: true, name: MODAL_NAME.BOOK_CREATE }, modalClose())
    ).toEqual(initialState);
  });
});
