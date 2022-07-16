import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookList } from '../../../api/books';

const statisticsFetchStartPrefix = String(Symbol('statisticsFetchStartPrefix'));

export const statisticsFetchStart = createAsyncThunk(
  statisticsFetchStartPrefix,
  async (_data, { rejectWithValue }) => {
    try {
      const bookList = await getBookList();

      return { data: bookList };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
