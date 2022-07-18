import React from 'react';
import { useDispatch } from 'react-redux';
import { Divider, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { bookListBeforeEditBookStart } from '../../../thunks/bookListEditBook';
import { modalEditBookToggleOpen } from '../../ModalEditBook/reducers/modalEditBook';
import { modalDeleteBookToggleOpen } from '../../ModalDeleteBook/reducers/modalDeleteBook';
import { bookListGetDeletedBookData } from '../../../reducers/bookListDeleteBook';

import { StyledMenu } from './styled';

export const CardMenu = (props) => {
  const { menuId, open, anchorEl, onClose, bookData } = props;

  const dispatch = useDispatch();

  const onEditBook = () => {
    onClose();
    dispatch(bookListBeforeEditBookStart({ id: bookData._id }));
    dispatch(modalEditBookToggleOpen());
  };

  const onDeleteBook = () => {
    onClose();
    dispatch(bookListGetDeletedBookData({ data: bookData }));
    dispatch(modalDeleteBookToggleOpen());
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
      <MenuItem onClick={onEditBook}>Edit</MenuItem>
      <MenuItem onClick={onDeleteBook}>Delete</MenuItem>
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
