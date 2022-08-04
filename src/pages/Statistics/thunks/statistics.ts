import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBookList } from '../../../api/books';
import { Book } from '../../../types';

const STATISTICS_FETCH_START_PREFIX = 'STATISTICS_FETCH_START';

export const statisticsFetchStart = createAsyncThunk<
  { data: Book[] },
  never,
  { rejectValue: { error: string } }
>(STATISTICS_FETCH_START_PREFIX, async (_data, { rejectWithValue }) => {
  try {
    const bookList = await getBookList();

    return { data: bookList } as any;
  } catch (error) {
    return rejectWithValue({ error: error as string });
  }
});
