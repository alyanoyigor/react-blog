import React from 'react';
import PropTypes from 'prop-types';
import { Divider, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { bookType } from '../../../../../propTypes/bookType';
import { StyledMenu } from './styled';
import { Book } from '../../../../../types';

type CardMenuProps = {
  open: boolean;
  handleDelete: (bookData: Book) => void;
  handleEdit: (bookData: Book) => void;
  bookData: Book;
  onClose: () => void;
  anchorEl: Element | null;
  menuId?: string;
};

export const CardMenu = (props: CardMenuProps) => {
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

CardMenu.defaultProps = {
  menuId: null,
  anchorEl: null,
};

CardMenu.propTypes = {
  menuId: PropTypes.string,
  anchorEl: PropTypes.instanceOf(Element),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  bookData: PropTypes.shape(bookType).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
