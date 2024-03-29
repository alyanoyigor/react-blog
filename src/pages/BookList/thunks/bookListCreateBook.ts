import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { modalClose } from '../../../store/modal/reducer/modal';
import { BookCreate } from '../../../types';
import { createBook } from '../../../api/books';
import { createActions } from '../reducers/bookListCreateBook';
import { bookListFetchStart } from './bookListFetch';
import { AppDispatch } from '../../../store';

const BOOK_LIST_CREATE_BOOK_START_TYPE = 'BOOK_LIST_CREATE_BOOK_START';

export const bookListCreateBookStart = createAsyncThunk<
  void,
  { bookData: BookCreate },
  { dispatch: AppDispatch }
>(BOOK_LIST_CREATE_BOOK_START_TYPE, async (data, { dispatch }) => {
  try {
    const { bookData } = data;
    dispatch(createActions.bookCreateInProgress());

    await createBook(bookData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(createActions.bookCreateSuccess());

    dispatch(modalClose());
    await dispatch(bookListFetchStart());
    toast.success('Book has been created successfully!');
  } catch (error) {
    dispatch(createActions.bookCreateError({ error: error as string }));
    toast.error(error as string);
  }
});
