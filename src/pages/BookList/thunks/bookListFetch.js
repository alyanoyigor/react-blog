import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBookList } from '../../../api/books';

const bookListFetchStartType = String(Symbol('BOOK_LIST_FETCH_START'));

export const bookListFetchStart = createAsyncThunk(
  bookListFetchStartType,
  async (_data, { rejectWithValue, signal }) => {
    try {
      const source = axios.CancelToken.source();
      signal.addEventListener('abort', () => {
        source.cancel('igor aborted');
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      const bookList = await getBookList({ cancelToken: source.token });

      return { data: bookList };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
