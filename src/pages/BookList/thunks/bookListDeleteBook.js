import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteBook } from '../../../api/books';
import { modalClose } from '../../../store/modal/reducer/modal';

import { bookListFetchStart } from './bookListFetch';

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
      dispatch(modalClose());

      toast.success('Book has been deleted successfully!');
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
