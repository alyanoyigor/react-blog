import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { modalClose } from '../../../store/modal/reducer/modal';
import { createBook } from '../../../api/books';
import { createActions } from '../reducers/bookListCreateBook';
import { bookListFetchStart } from './bookListFetch';

const bookListCreateBookStartType = String(
  Symbol('BOOK_LIST_CREATE_BOOK_START')
);

export const bookListCreateBookStart = createAsyncThunk(
  bookListCreateBookStartType,
  async (data, { dispatch }) => {
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
      toast.error(error);
      dispatch(createActions.bookCreateError());
    }
  }
);
