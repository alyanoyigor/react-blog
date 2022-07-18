import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteBook } from '../../../api/books';
import { modalDeleteBookToggleOpen } from '../components/ModalDeleteBook/reducers/modalDeleteBook';

import { bookListFetchStart } from './bookList';

const bookListDeleteBookStartType = String(
  Symbol('BOOK_LIST_DELETE_BOOK_START_TYPE')
);

export const bookListDeleteBookStart = createAsyncThunk(
  bookListDeleteBookStartType,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { id } = data;
      await deleteBook({ id });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(bookListFetchStart());
      dispatch(modalDeleteBookToggleOpen());

      toast.success('Book has been deleted successfully!');
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
