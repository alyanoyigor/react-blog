import React from 'react';
import { useDispatch } from 'react-redux';
import { Divider, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { bookListBeforeEditBookStart } from '../../../thunks/bookListEditBook';
import { modalEditBookToggleOpen } from '../../ModalEditBook/reducers/modalEditBook';
import { StyledMenu } from './styled';

// import * as selectors from '../../../selectors/bookListEditBook';

export const CardMenu = (props) => {
  const { menuId, open, anchorEl, onClose, bookId } = props;

  const dispatch = useDispatch();

  const onEditBook = () => {
    onClose();
    dispatch(bookListBeforeEditBookStart({ id: bookId }));
    dispatch(modalEditBookToggleOpen());
  };

  return (
    <>
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
        <MenuItem onClick={onClose}>Delete</MenuItem>
        <Divider />
        <MenuItem component={Link} to={`/books/${bookId}`} onClick={onClose}>
          Open
        </MenuItem>
      </StyledMenu>
    </>
  );
};
