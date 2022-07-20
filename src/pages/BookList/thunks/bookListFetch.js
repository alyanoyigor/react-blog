import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookList } from '../../../api/books';

const bookListFetchStartType = String(Symbol('BOOK_LIST_FETCH_START_TYPE'));

export const bookListFetchStart = createAsyncThunk(
  bookListFetchStartType,
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
