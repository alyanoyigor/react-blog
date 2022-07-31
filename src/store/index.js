import { combineReducers, configureStore } from '@reduxjs/toolkit';

import bookItemReducer from '../pages/BookItem/reducers/bookItem';
import bookListReducer from '../pages/BookList/reducers/bookList';
import modalReducer from './modal/reducer/modal';
import paginationReducer from './pagination/reducer/pagination';
import statisticsReducer from '../pages/Statistics/reducers/statistics';

const rootReducer = combineReducers({
  bookItem: bookItemReducer,
  bookList: bookListReducer,
  statistics: statisticsReducer,
  pagination: paginationReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;
