import { combineReducers } from 'redux';

import bookItemReducer from '../../pages/BookItem/reducers/bookItem';
import bookListReducer from '../../pages/BookList/reducers/bookList';
import statisticsReducer from '../../pages/Statistics/reducers/statistics';

export default combineReducers({
  bookItem: bookItemReducer,
  bookList: bookListReducer,
  statistics: statisticsReducer,
});
