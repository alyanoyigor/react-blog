import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import paginationReducer from '../components/Pagination/reducers/pagination';
import bookItemReducer from '../pages/BookItem/reducers/bookItem';
import bookListReducer from '../pages/BookList/reducers/bookList';
import statisticsReducer from '../pages/Statistics/reducers/statistics';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

const store = configureStore({
  reducer: {
    bookItem: bookItemReducer,
    bookList: bookListReducer,
    statistics: statisticsReducer,
    pagination: paginationReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
