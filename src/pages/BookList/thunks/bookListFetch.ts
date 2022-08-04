import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBookList } from '../../../api/books';
import { Book } from '../../../types';

const BOOK_LIST_FETCH_START_TYPE = 'BOOK_LIST_FETCH_START';

export const bookListFetchStart = createAsyncThunk<
  { data: Book[] },
  never,
  { rejectValue: { error: string } }
>(BOOK_LIST_FETCH_START_TYPE, async (_data, { rejectWithValue, signal }) => {
  try {
    const source = axios.CancelToken.source();
    signal.addEventListener('abort', () => {
      source.cancel();
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bookList = await getBookList({ cancelToken: source.token });

    return { data: bookList } as any;
  } catch (error) {
    return rejectWithValue({ error: error as string });
  }
});
