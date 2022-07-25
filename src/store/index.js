import { configureStore } from '@reduxjs/toolkit';

import bookItemReducer from '../pages/BookItem/reducers/bookItem';
import bookListReducer from '../pages/BookList/reducers/bookList';
import modalReducer from './modal/reducer/modal';
import paginationReducer from './pagination/reducer/pagination';

import statisticsReducer from '../pages/Statistics/reducers/statistics';

const store = configureStore({
  reducer: {
    bookItem: bookItemReducer,
    bookList: bookListReducer,
    statistics: statisticsReducer,
    pagination: paginationReducer,
    modal: modalReducer,
  },
});

export default store;
