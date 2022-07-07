import {
  BEGIN_LOADING,
  END_LOADING,
  ERROR_RESPONSE,
  GET_BOOKS_SUCCESS,
  GET_BOOK_SUCCESS,
  SET_CURRENT_PAGE,
} from '../actions/actionTypes';

const initialBookState = {
  books: [],
  bookData: {},
  currentPage: 1,
  booksPerPage: 10,
  error: null,
  loading: true,
};

const booksReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case BEGIN_LOADING:
      return { ...state, loading: true, error: null };
    case END_LOADING:
      return { ...state, loading: false };
    case GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload };
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
    case GET_BOOK_SUCCESS:
      return { ...state, bookData: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
