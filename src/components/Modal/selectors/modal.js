import { createSelector } from 'reselect';

const modalStateSelector = (state) => state.modal;

export const modalIsOpenSelector = createSelector(
  modalStateSelector,
  (modal) => modal.isOpen
);
