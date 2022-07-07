import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';
import { getBooksFetch, setCurrentPage } from '../../store/actions/books';
import { BookCardList } from './components/BookCardList';

export const BookList = () => {
  const dispatch = useDispatch();
  const { currentPage, booksPerPage, error, loading, books } = useSelector(
    (state) => state.booksReducer
  );

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books && books.slice(firstBookIndex, lastBookIndex);

  const handlePaginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));

  useEffect(() => {
    dispatch(getBooksFetch());
  }, [dispatch]);

  return (
    <>
      {loading && !error && <Preloader />}
      {currentBooks && !loading && !error && (
        <>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={booksPerPage}
            itemsCount={books.length}
            onPaginate={handlePaginate}
          />
          <BookCardList bookList={currentBooks} />
        </>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
