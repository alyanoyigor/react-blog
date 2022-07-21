import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import { Modal } from '../../../../components/Modal';
import { BookForm } from '../../components/BookForm';
import { createBookSchema } from '../../validation';

export const ModalCreateBook = (props) => {
  const { open, handleClose, loading, handleCreateBook } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Create book
      </Typography>
      <BookForm
        schema={createBookSchema}
        onSubmit={handleCreateBook}
        onCancel={handleClose}
        loading={loading}
      />
    </Modal>
  );
};

ModalCreateBook.propTypes = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCreateBook: PropTypes.func.isRequired,
};
