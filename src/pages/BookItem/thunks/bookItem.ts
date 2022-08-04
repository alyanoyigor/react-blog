import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookItem } from '../../../api/books';
import { Book } from '../../../types';

const BOOK_ITEM_FETCH_START_PREFIX = 'BOOK_ITEM_FETCH_START';

export const bookItemFetchStart = createAsyncThunk<
  { data: Book },
  { id: string }
>(BOOK_ITEM_FETCH_START_PREFIX, async (data, { rejectWithValue }) => {
  try {
    const { id } = data;
    const bookItem = await getBookItem(id);

    return { data: bookItem } as any;
  } catch (error) {
    return rejectWithValue({ error });
  }
});
