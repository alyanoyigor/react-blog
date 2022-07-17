import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getBookItem, updateBook } from '../../../api/books';
import { modalEditBookToggleOpen } from '../components/ModalEditBook/reducers/modalEditBook';
import { bookListFetchStart } from './bookList';

const bookListEditBookStartPrefix = String(
  Symbol('bookListEditBookStartPrefix')
);
const bookListBeforeEditBookStartPrefix = String(
  Symbol('bookListBeforeEditBookStartPrefix')
);

export const bookListEditBookStart = createAsyncThunk(
  bookListEditBookStartPrefix,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { bookData } = data;
      await updateBook(bookData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(bookListFetchStart());
      dispatch(modalEditBookToggleOpen());
      toast.success('Book has been updated successfully!');
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const bookListBeforeEditBookStart = createAsyncThunk(
  bookListBeforeEditBookStartPrefix,
  async (data, { rejectWithValue }) => {
    try {
      const { id } = data;
      const bookData = await getBookItem(id);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return { data: bookData };
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
