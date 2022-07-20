import React from 'react';
import { Typography } from '@mui/material';

import { Modal } from '../../../../components/Modal';
import { editBookSchema } from '../../validation';
import { BookForm } from '../BookForm';

export const ModalEditBook = (props) => {
  const {
    open,
    handleClose,
    handleEditBook,
    bookOptions,
    loading,
    fetchLoading,
  } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Edit book
      </Typography>
      <BookForm
        fetchLoading={fetchLoading}
        schema={editBookSchema}
        onSubmit={handleEditBook}
        bookOptions={bookOptions}
        onCancel={handleClose}
        loading={loading}
      />
    </Modal>
  );
};
