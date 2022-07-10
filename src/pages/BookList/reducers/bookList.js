import {
  BOOK_LIST_FETCH_IN_PROGRESS,
  BOOK_LIST_FETCH_SUCCESS,
  BOOK_LIST_FETCH_ERROR,
} from '../action-types/bookList';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_LIST_FETCH_IN_PROGRESS: {
      return { ...state, loading: true, error: null };
    }

    case BOOK_LIST_FETCH_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }

    case BOOK_LIST_FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default bookListReducer;
