import React from 'react';
import { useAxios } from '../../hooks';
import { getBookList } from '../../api/books';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { Table } from './components/Table';

export const Statistics = () => {
  const { data, error, loading } = useAxios(getBookList);

  return (
    <>
      {loading && !data && !error && <Preloader />}
      {data && !loading && !error && <Table bookList={data} />}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
