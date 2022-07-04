import React from 'react';
import { Divider, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledMenu } from './styled';

export const CardMenu = (props) => {
  const { menuId, open, anchorEl, onClose, bookId } = props;

  return (
    <StyledMenu
      id={menuId}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={onClose}>Edit</MenuItem>
      <MenuItem onClick={onClose}>Delete</MenuItem>
      <Divider />
      <MenuItem onClick={onClose} as={Link} to={`/books/${bookId}`}>
        Open
      </MenuItem>
    </StyledMenu>
  );
};
