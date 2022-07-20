import React from 'react';
import { Divider, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { StyledMenu } from './styled';

export const CardMenu = (props) => {
  const {
    menuId,
    open,
    anchorEl,
    onClose,
    bookData,
    handleEdit,
    handleDelete,
  } = props;

  const onEdit = () => {
    onClose();
    handleEdit(bookData);
  };

  const onDelete = () => {
    onClose();
    handleDelete(bookData);
  };

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
      <MenuItem onClick={onEdit}>Edit</MenuItem>
      <MenuItem onClick={onDelete}>Delete</MenuItem>
      <Divider />
      <MenuItem
        component={Link}
        to={`/books/${bookData._id}`}
        onClick={onClose}
      >
        Open
      </MenuItem>
    </StyledMenu>
  );
};
