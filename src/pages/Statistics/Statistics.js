import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { statisticsFetchStart } from './thunks/statistics';
import { statisticsResetData } from './reducers/statistics';
import { Table } from './components/Table';

import * as selectors from './selectors/statistics';

export const Statistics = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectors.statisticsDataSelector);
  const loading = useSelector(selectors.statisticsLoadingSelector);
  const error = useSelector(selectors.statisticsErrorSelector);

  useEffect(() => {
    dispatch(statisticsFetchStart());
    return () => {
      dispatch(statisticsResetData());
    };
  }, [dispatch]);

  return (
    <>
      {loading && !error && <Preloader />}
      {books && !loading && !error && <Table bookList={books} />}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
