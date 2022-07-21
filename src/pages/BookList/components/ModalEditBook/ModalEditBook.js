import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

import { Modal } from '../../../../components/Modal';
import { editBookSchema } from '../../validation';
import { bookListBeforeEditBookStart } from '../../thunks/bookListEditBook';
import { BookForm } from '../BookForm';

export const ModalEditBook = (props) => {
  const {
    open,
    handleClose,
    handleEditBook,
    fetchData,
    bookOptions,
    loading,
    fetchLoading,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(
      bookListBeforeEditBookStart({ id: fetchData._id })
    );
    return () => {
      promise.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
