import { createSelector } from 'reselect';

const modalEditBookStateSelector = (state) => state.modalEditBook;

export const modalEditBookIsOpenSelector = createSelector(
  modalEditBookStateSelector,
  (modalEditBook) => modalEditBook.isOpen
);
