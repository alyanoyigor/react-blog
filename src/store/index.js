import { configureStore } from '@reduxjs/toolkit';

import modalDeleteBookReducer from '../pages/BookList/components/ModalDeleteBook/reducers/modalDeleteBook';
import modalEditBookReducer from '../pages/BookList/components/ModalEditBook/reducers/modalEditBook';
import modalCreateBookReducer from '../pages/BookList/components/ModalCreateBook/reducers/modalCreateBook';
import paginationReducer from '../components/Pagination/reducers/pagination';
import bookItemReducer from '../pages/BookItem/reducers/bookItem';
import bookListReducer from '../pages/BookList/reducers/bookList';
import bookListCreateBookReducer from '../pages/BookList/reducers/bookListCreateBook';
import bookListEditBookReducer from '../pages/BookList/reducers/bookListEditBook';
import bookListDeleteBookReducer from '../pages/BookList/reducers/bookListDeleteBook';
import statisticsReducer from '../pages/Statistics/reducers/statistics';

const store = configureStore({
  reducer: {
    bookItem: bookItemReducer,
    bookList: bookListReducer,
    bookListDeleteBook: bookListDeleteBookReducer,
    bookListCreateBook: bookListCreateBookReducer,
    bookListEditBook: bookListEditBookReducer,
    statistics: statisticsReducer,
    pagination: paginationReducer,
    modalCreateBook: modalCreateBookReducer,
    modalEditBook: modalEditBookReducer,
    modalDeleteBook: modalDeleteBookReducer,
  },
});

export default store;
