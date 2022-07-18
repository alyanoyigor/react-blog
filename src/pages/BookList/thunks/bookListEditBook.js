import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getBookItem, updateBook } from '../../../api/books';
import { modalEditBookToggleOpen } from '../components/ModalEditBook/reducers/modalEditBook';
import { bookListFetchStart } from './bookList';

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
      dispatch(modalEditBookToggleOpen());
      toast.success('Book has been updated successfully!');
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const BOOKLIST_BEFORE_EDIT_BOOK_START_TYPE = String(
  Symbol('BOOKLIST_BEFORE_EDIT_BOOK_START_TYPE')
);

export const bookListBeforeEditBookStart = createAsyncThunk(
  BOOKLIST_BEFORE_EDIT_BOOK_START_TYPE,
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
