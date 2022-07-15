import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { Modal } from '../../../../components/Modal';
import { BookForm } from '../../components/BookForm';

import * as selectors from '../../selectors/bookListCreateBook';

export const ModalCreateBook = () => {
  const loading = useSelector(selectors.bookListCreateBookLoadingSelector);

  return (
    <Modal disabled={loading}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Create book
      </Typography>
      <BookForm loading={loading} />
    </Modal>
  );
};
