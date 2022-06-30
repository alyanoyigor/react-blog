import React from 'react';
import { Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledCardMenu, StyledMenuButton } from './styled';

export const CardMenu = (props) => {
  const { menuId, open, anchorEl, onClose, bookId } = props;

  return (
    <Popover
      id={menuId}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <StyledCardMenu>
        <StyledMenuButton>Edit</StyledMenuButton>
        <StyledMenuButton>Delete</StyledMenuButton>
        <StyledMenuButton as={Link} to={`/books/${bookId}`}>
          Open
        </StyledMenuButton>
      </StyledCardMenu>
    </Popover>
  );
};
