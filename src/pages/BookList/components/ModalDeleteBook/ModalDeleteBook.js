import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { Modal } from '../../../../components/Modal';

import { modalDeleteBookIsOpenSelector } from './selectors/modalDeleteBook';
import { bookListDeleteBookStart } from '../../thunks/bookListDeleteBook';
import * as selectors from '../../selectors/bookListDeleteBook';
import { modalDeleteBookToggleOpen } from './reducers/modalDeleteBook';

import { StyledButton } from './styled';

export const ModalDeleteBook = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(modalDeleteBookIsOpenSelector);
  const loading = useSelector(selectors.bookListDeleteBookLoadingSelector);
  const bookData = useSelector(selectors.bookListDeleteBookDataSelector);

  const onClose = () => {
    if (!loading) {
      dispatch(modalDeleteBookToggleOpen());
    }
  };

  const onDeleteBook = () => {
    dispatch(bookListDeleteBookStart({ id: bookData._id }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Typography mb={1} textAlign="center" variant="h5" component="h1">
        Delete book
      </Typography>
      <Typography mb={3} textAlign="center" variant="body1" component="p">
        {`Do you really want to delete ${bookData.title} book?`}
      </Typography>
      <Box display="flex" gap="4px" justifyContent="flex-end">
        <StyledButton disabled={loading} color="error" onClick={onClose}>
          Cancel
        </StyledButton>
        <StyledButton
          variant="contained"
          disabled={loading}
          loading={loading}
          onClick={onDeleteBook}
        >
          Delete
        </StyledButton>
      </Box>
    </Modal>
  );
};
