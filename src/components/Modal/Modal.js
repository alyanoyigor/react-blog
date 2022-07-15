import React from 'react';
import { useSelector } from 'react-redux';
import { Modal as ModalMUI, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledCloseButton, modalStyles } from './styled';

import * as selectors from './selectors/modal';

export const Modal = (props) => {
  const { onClose, children } = props;
  const isOpen = useSelector(selectors.modalIsOpenSelector);

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
