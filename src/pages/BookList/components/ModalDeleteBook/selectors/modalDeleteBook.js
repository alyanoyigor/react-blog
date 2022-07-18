import { createSelector } from 'reselect';

const modalDeleteBookStateSelector = (state) => state.modalDeleteBook;

export const modalDeleteBookIsOpenSelector = createSelector(
  modalDeleteBookStateSelector,
  (modalDeleteBook) => modalDeleteBook.isOpen
);
