import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { statisticsFetchStart } from './actions/statistics';
import { Table } from './components/Table';

import * as selectors from './selectors/statistics';

export const Statistics = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => selectors.statisticsDataSelector(state));
  const loading = useSelector(selectors.statisticsLoadingSelector);
  const error = useSelector(selectors.statisticsErrorSelector);

  useEffect(() => {
    dispatch(statisticsFetchStart());
  }, [dispatch]);

  return (
    <>
      {loading && !error && <Preloader />}
      {books && !loading && !error && <Table bookList={books} />}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
