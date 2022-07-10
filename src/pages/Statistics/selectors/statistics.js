import { createSelector } from 'reselect';

const statisticsStateSelector = (state) => state.statistics;

export const statisticsLoadingSelector = createSelector(
  statisticsStateSelector,
  (statistics) => statistics.loading
);

export const statisticsDataSelector = createSelector(
  statisticsStateSelector,
  (statistics) => statistics.data
);

export const statisticsErrorSelector = createSelector(
  statisticsStateSelector,
  (statistics) => statistics.error
);
