import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookItem } from '../../../api/books';

const bookItemFetchStartPrefix = String(Symbol('bookItemFetchStartPrefix'));

export const bookItemFetchStart = createAsyncThunk(
  bookItemFetchStartPrefix,
  async (data, { rejectWithValue }) => {
    try {
      const { id } = data;
      const bookItem = await getBookItem(id);

      return { data: bookItem };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
