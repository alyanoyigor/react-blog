import { createSelector } from 'reselect';

const modalCreateBookStateSelector = (state) => state.modalCreateBook;

export const modalCreateBookIsOpenSelector = createSelector(
  modalCreateBookStateSelector,
  (modalCreateBook) => modalCreateBook.isOpen
);
