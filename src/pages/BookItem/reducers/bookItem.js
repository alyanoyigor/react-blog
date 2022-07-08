import {
  BOOK_ITEM_FETCH_IN_PROGRESS,
  BOOK_ITEM_FETCH_SUCCESS,
  BOOK_ITEM_FETCH_ERROR,
} from "../action-types/bookItem";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ITEM_FETCH_IN_PROGRESS: {
      return { ...state, loading: true, error: null };
    }

    case BOOK_ITEM_FETCH_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }

    case BOOK_ITEM_FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default bookItemReducer;
