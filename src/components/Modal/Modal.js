import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal as ModalMUI, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { modalToggleOpen } from './reducers/modal';
import { StyledCloseButton, modalStyles } from './styled';

import * as selectors from './selectors/modal';

export const Modal = (props) => {
  const { disabled, children } = props;
  const dispatch = useDispatch();
  const isOpen = useSelector(selectors.modalIsOpenSelector);

  const onClose = () => {
    if (!disabled) {
      dispatch(modalToggleOpen());
    }
  };

  return (
    <ModalMUI open={isOpen} onClose={onClose}>
      <Box sx={modalStyles}>
        <StyledCloseButton size="small" onClick={onClose}>
          <CloseIcon />
        </StyledCloseButton>
        {children}
      </Box>
    </ModalMUI>
  );
};
