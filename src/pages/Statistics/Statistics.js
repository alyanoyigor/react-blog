import React, { useEffect } from 'react';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { getBooksFetch } from '../../store/actions/books';
import { Table } from './components/Table';
import { useDispatch, useSelector } from 'react-redux';

export const Statistics = () => {
  const { books, error, loading } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFetch());
  }, [dispatch]);

  return (
    <>
      {loading && !error && <Preloader />}
      {books && !loading && !error && <Table bookList={books} />}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
