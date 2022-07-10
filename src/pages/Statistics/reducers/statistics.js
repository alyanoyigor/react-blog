import {
  STATISTICS_FETCH_IN_PROGRESS,
  STATISTICS_FETCH_SUCCESS,
  STATISTICS_FETCH_ERROR,
} from '../action-types/statistics';

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATISTICS_FETCH_IN_PROGRESS: {
      return { ...state, loading: true, error: null };
    }

    case STATISTICS_FETCH_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }

    case STATISTICS_FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default statisticsReducer;
