import { MODAL_NAME } from '../constants/modal';
import modalReducer, { modalClose, modalOpen } from './modal';

describe('Testing modal reducer', () => {
  const initialState = { open: false, name: null };

  test('should return the initial state', () => {
    const action = { type: undefined };

    expect(modalReducer(undefined, action)).toEqual(initialState);
  });

  test('should open modal and set name', () => {
    const action = modalOpen({ name: MODAL_NAME.BOOK_CREATE });
    const expectedData = { open: true, name: MODAL_NAME.BOOK_CREATE };

    expect(modalReducer(initialState, action)).toEqual(expectedData);
  });

  test('should close modal and clear name', () => {
    const starterData = { open: true, name: MODAL_NAME.BOOK_CREATE };

    expect(modalReducer(starterData, modalClose())).toEqual(initialState);
  });
});
