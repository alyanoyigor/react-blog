import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getBookItem, updateBook } from '../../../api/books';
import { modalClose } from '../../../store/modal/reducer/modal';
import { bookListFetchStart } from './bookListFetch';

const bookListEditBookStartType = String(
  Symbol('BOOK_LIST_EDIT_BOOK_START_TYPE')
);

export const bookListEditBookStart = createAsyncThunk(
  bookListEditBookStartType,
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const { bookData } = data;
      await updateBook(bookData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(bookListFetchStart());
      dispatch(modalClose());
      toast.success('Book has been updated successfully!');
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const bookListBeforeEditBookStartType = String(
  Symbol('BOOK_LIST_BEFORE_EDIT_BOOK_START_TYPE')
);

export const bookListBeforeEditBookStart = createAsyncThunk(
  bookListBeforeEditBookStartType,
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
