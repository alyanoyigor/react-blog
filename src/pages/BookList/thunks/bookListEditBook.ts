import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getBookItem, updateBook } from '../../../api/books';
import { modalClose } from '../../../store/modal/reducer/modal';
import { AppDispatch } from '../../../store';
import { Book, BookUpdate } from '../../../types';
import {
  bookEditError,
  bookEditInProgress,
  bookEditSuccess,
  bookListEditBookResetData,
} from '../reducers/bookListEditBook';
import { bookListFetchStart } from './bookListFetch';

const bookListEditBookStartType = String(Symbol('BOOK_LIST_EDIT_BOOK_START'));

export const bookListEditBookStart = createAsyncThunk<
  void,
  { bookData: { bookOptions: BookUpdate; id: string } },
  { dispatch: AppDispatch }
>(bookListEditBookStartType, async (data, { dispatch }) => {
  try {
    dispatch(bookEditInProgress());
    const { bookData } = data;

    await updateBook(bookData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(modalClose());

    dispatch(bookEditSuccess());
    dispatch(bookListEditBookResetData());
    await dispatch(bookListFetchStart());
    toast.success('Book has been updated successfully!');
  } catch (error) {
    dispatch(bookEditError({ error: error as string }));
    toast.error(error as string);
  }
});

const BOOK_LIST_BEFORE_EDIT_BOOK_START_TYPE =
  'BOOK_LIST_BEFORE_EDIT_BOOK_START';

export const bookListBeforeEditBookStart = createAsyncThunk<
  { data: Book } | undefined,
  { id: string }
>(
  BOOK_LIST_BEFORE_EDIT_BOOK_START_TYPE,
  async (data, { signal, rejectWithValue }) => {
    try {
      const source = axios.CancelToken.source();
      signal.addEventListener('abort', () => {
        source.cancel();
      });

      const { id } = data;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const bookData = await getBookItem(id, { cancelToken: source.token });

      return { data: bookData } as any;
    } catch (error: any) {
      if (error?.code !== 'ERR_CANCELED') {
        toast.error(error.message);
      }
      return rejectWithValue(error);
    }
  }
);
