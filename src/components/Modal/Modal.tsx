import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Modal as ModalMUI, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledCloseButton, modalStyles } from './styled';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = (props) => {
  const { open, onClose, children } = props;

  return (
    <ModalMUI open={open} onClose={onClose}>
      <Box sx={modalStyles}>
        <StyledCloseButton size="small" onClick={onClose}>
          <CloseIcon />
        </StyledCloseButton>
        {children}
      </Box>
    </ModalMUI>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
