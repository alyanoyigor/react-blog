import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookList } from '../../../api/books';

const bookListFetchStartPrefix = String(Symbol('bookListFetchStartPrefix'));

export const bookListFetchStart = createAsyncThunk(
  bookListFetchStartPrefix,
  async (_data, { rejectWithValue }) => {
    try {
      const bookList = await getBookList();
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return { data: bookList };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
