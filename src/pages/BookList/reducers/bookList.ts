import { combineReducers } from '@reduxjs/toolkit';
import { bookListCreateBookReducer } from './bookListCreateBook';
import { bookListDeleteBookReducer } from './bookListDeleteBook';
import { bookListEditBookReducer } from './bookListEditBook';
import { bookListFetch } from './bookListFetch';

const bookListReducer = combineReducers({
  deleteBook: bookListDeleteBookReducer,
  createBook: bookListCreateBookReducer,
  editBook: bookListEditBookReducer,
  fetchBooks: bookListFetch,
});

export default bookListReducer;
