import axios from 'axios';
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
  async (data, { dispatch }) => {
    try {
      const { bookData } = data;
      await updateBook(bookData);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(bookListFetchStart());
      dispatch(modalClose());
      toast.success('Book has been updated successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const bookListBeforeEditBookStartType = String(
  Symbol('BOOK_LIST_BEFORE_EDIT_BOOK_START_TYPE')
);

export const bookListBeforeEditBookStart = createAsyncThunk(
  bookListBeforeEditBookStartType,
  async (data, { signal }) => {
    try {
      const source = axios.CancelToken.source();
      signal.addEventListener('abort', () => {
        source.cancel();
      });

      const { id } = data;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const bookData = await getBookItem(id, { cancelToken: source.token });

      return { data: bookData };
    } catch (error) {
      if (error?.code !== 'ERR_CANCELED') {
        toast.error(error.message);
      }
    }
  }
);
