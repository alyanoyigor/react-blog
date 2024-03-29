import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

import { bookType } from '../../../../propTypes/bookType';
import { Modal } from '../../../../components/Modal';
import { Book } from '../../../../types';
import { StyledButton, StyledBookTitle } from './styled';

type ModalDeleteBookProps = {
  open: boolean;
  handleClose: () => void;
  bookData: Book | Record<string, never>;
  loading: boolean;
  onDelete: (id: string) => void;
};

export const ModalDeleteBook = (props: ModalDeleteBookProps) => {
  const { open, handleClose, bookData, loading, onDelete } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Delete book
      </Typography>
      <Typography mb={3} textAlign="center" variant="body1" component="p">
        Do you really want to delete{' '}
        <StyledBookTitle>{bookData.title}</StyledBookTitle> book?
      </Typography>
      <Box display="flex" gap="4px" justifyContent="flex-end">
        <StyledButton
          disabled={loading}
          variant="contained"
          onClick={handleClose}
        >
          Cancel
        </StyledButton>
        <StyledButton
          color="error"
          disabled={loading}
          loading={loading}
          onClick={() => onDelete(bookData._id)}
        >
          Delete
        </StyledButton>
      </Box>
    </Modal>
  );
};

ModalDeleteBook.propTypes = {
  open: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  bookData: PropTypes.shape(bookType).isRequired,
  onDelete: PropTypes.func.isRequired,
};
