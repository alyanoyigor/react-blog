import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { Modal } from '../../../../components/Modal';
import { bookListEditBookStart } from '../../thunks/bookListEditBook';
import { bookListEditBookResetData } from '../../reducers/bookListEditBook';
import * as selectors from '../../selectors/bookListEditBook';

import { BookForm } from '../BookForm';
import { modalEditBookIsOpenSelector } from './selectors/modal';
import { modalEditBookToggleOpen } from './reducers/modalEditBook';

export const ModalEditBook = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(modalEditBookIsOpenSelector);
  const loading = useSelector(selectors.bookListEditBookLoadingSelector);
  const data = useSelector(selectors.bookListEditBookDataSelector);

  const onClose = () => {
    if (!loading) {
      dispatch(modalEditBookToggleOpen());
    }
    dispatch(bookListEditBookResetData());
  };

  const handleEditBookSubmit = (data) => {
    dispatch(
      bookListEditBookStart({ bookData: { bookOptions: data, id: data._id } })
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Edit book
      </Typography>
      <BookForm
        onSubmit={handleEditBookSubmit}
        bookOptions={data}
        onCancel={onClose}
        loading={loading}
      />
    </Modal>
  );
};
