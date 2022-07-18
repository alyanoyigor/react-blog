import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { bookListCreateBookStart } from '../../thunks/bookListCreateBook';
import { Modal } from '../../../../components/Modal';
import { BookForm } from '../../components/BookForm';

import { createBookSchema } from '../../validation';
import { bookListCreateBookLoadingSelector } from '../../selectors/bookListCreateBook';
import { modalCreateBookToggleOpen } from './reducers/modalCreateBook';
import { modalCreateBookIsOpenSelector } from './selectors/modalCreateBook';

export const ModalCreateBook = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(modalCreateBookIsOpenSelector);
  const loading = useSelector(bookListCreateBookLoadingSelector);

  const onClose = () => {
    if (!loading) {
      dispatch(modalCreateBookToggleOpen());
    }
  };

  const handleEditBookSubmit = (data) => {
    dispatch(bookListCreateBookStart({ bookData: data }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Create book
      </Typography>
      <BookForm
        schema={createBookSchema}
        onSubmit={handleEditBookSubmit}
        onCancel={onClose}
        loading={loading}
      />
    </Modal>
  );
};
