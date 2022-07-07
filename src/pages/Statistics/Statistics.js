import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { getBooksFetch } from '../../store/actions/books';
import { Table } from './components/Table';

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
