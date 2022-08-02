import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

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

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const setupStore = (preloadedState: RootState | {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;
