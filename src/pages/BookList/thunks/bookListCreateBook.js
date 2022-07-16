import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { createBook } from '../../../api/books';
import { modalToggleOpen } from '../../../components/Modal/reducers/modal';
import { bookListFetchStart } from './bookList';

const bookListCreateBookStartPrefix = String(
  Symbol('bookListCreateBookStartPrefix')
);

export const bookListCreateBookStart = createAsyncThunk(
  bookListCreateBookStartPrefix,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { bookData } = data;
      const bookList = await createBook(bookData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(bookListFetchStart());
      dispatch(modalToggleOpen());
      toast.success('Book has been created successfully!');

      return { data: bookList };
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
