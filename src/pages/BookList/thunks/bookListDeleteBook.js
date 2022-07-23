import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteBook } from '../../../api/books';
import { modalClose } from '../../../store/modal/reducer/modal';
import { deleteActions } from '../reducers/bookListDeleteBook';

import { bookListFetchStart } from './bookListFetch';

const bookListDeleteBookStartType = String(
  Symbol('BOOK_LIST_DELETE_BOOK_START_TYPE')
);

export const bookListDeleteBookStart = createAsyncThunk(
  bookListDeleteBookStartType,
  async (data, { dispatch }) => {
    try {
      const { id } = data;
      dispatch(deleteActions.bookDeleteInProgress());
      await deleteBook({ id });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(deleteActions.bookDeleteSuccess());

      dispatch(modalClose());
      dispatch(deleteActions.bookListResetDeleteBookData());

      await dispatch(bookListFetchStart());
      toast.success('Book has been deleted successfully!');
    } catch (error) {
      dispatch(deleteActions.bookDeleteError());
      toast.error(error.message);
    }
  }
);
