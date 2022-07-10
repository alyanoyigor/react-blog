import {
  STATISTICS_FETCH_ERROR,
  STATISTICS_FETCH_IN_PROGRESS,
  STATISTICS_FETCH_SUCCESS,
  STATISTICS_FETCH_START,
} from '../action-types/statistics';

export const statisticsFetchStart = () => ({
  type: STATISTICS_FETCH_START,
});

export const statisticsFetchInProgress = () => ({
  type: STATISTICS_FETCH_IN_PROGRESS,
});

export const statisticsFetchSuccess = (data) => ({
  type: STATISTICS_FETCH_SUCCESS,
  payload: { data },
});

export const statisticsFetchError = () => ({
  type: STATISTICS_FETCH_ERROR,
});
