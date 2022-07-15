import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { modalToggleOpen } from '../../../../components/Modal/reducers/modal';
import { Modal } from '../../../../components/Modal';
import { BookForm } from '../../components/BookForm';

import * as selectors from '../../selectors/bookListCreateBook';

export const ModalCreateBook = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.bookListCreateBookLoadingSelector);

  const onClose = () => {
    if (!loading) {
      dispatch(modalToggleOpen());
    }
  };

  return (
    <Modal onClose={onClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Create book
      </Typography>
      <BookForm onCancel={onClose} loading={loading} />
    </Modal>
  );
};
