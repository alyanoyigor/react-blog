import { combineReducers } from "redux";
import bookItemReducer from "../../pages/BookItem/reducers/bookItem";

export default combineReducers({
  bookItem: bookItemReducer,
});
