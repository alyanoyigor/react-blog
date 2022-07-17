import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { createBook } from '../../../api/books';
import { modalCreateBookToggleOpen } from '../components/ModalCreateBook/reducers/modalCreateBook';
import { bookListFetchStart } from './bookList';

const bookListCreateBookStartPrefix = String(
  Symbol('bookListCreateBookStartPrefix')
);

export const bookListCreateBookStart = createAsyncThunk(
  bookListCreateBookStartPrefix,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { bookData } = data;
      const book = await createBook(bookData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(bookListFetchStart());
      dispatch(modalCreateBookToggleOpen());
      toast.success('Book has been created successfully!');

      return { data: book };
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
