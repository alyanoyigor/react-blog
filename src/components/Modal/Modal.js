import React from 'react';
import { Modal as ModalMUI, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledCloseButton, modalStyles } from './styled';

export const Modal = (props) => {
  const { isOpen, onClose, children } = props;

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