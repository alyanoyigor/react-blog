import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import { bookType } from '../../../../propTypes/bookType';
import { Modal } from '../../../../components/Modal';
import { bookEditSchema } from '../../validation';
import { Book, BookCreate, BookUpdate } from '../../../../types';
import { useAppDispatch } from '../../../../store';
import { bookListBeforeEditBookStart } from '../../thunks/bookListEditBook';
import { BookForm } from '../BookForm';

type ModalEditBookProps = {
  open: boolean;
  handleClose: () => void;
  handleEditBook: (data: Book) => void;
  fetchData: Book | Record<string, never>;
  loading: boolean;
  fetchLoading: boolean;
  bookOptions: BookCreate | BookUpdate | Record<string, never>;
};

export const ModalEditBook = (props: ModalEditBookProps) => {
  const {
    open,
    handleClose,
    handleEditBook,
    fetchData,
    bookOptions,
    loading,
    fetchLoading,
  } = props;

  const dispatch = useAppDispatch();

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
        schema={bookEditSchema}
        onSubmit={handleEditBook}
        bookOptions={bookOptions}
        onCancel={handleClose}
        loading={loading}
      />
    </Modal>
  );
};

ModalEditBook.propTypes = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchLoading: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleEditBook: PropTypes.func.isRequired,
  bookOptions: PropTypes.shape(bookType).isRequired,
  fetchData: PropTypes.shape(bookType).isRequired,
};
