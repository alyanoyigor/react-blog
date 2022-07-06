import React, { useCallback, useEffect, useState } from 'react';
import { getBookList } from '../../api/books';
import { Error } from '../../components/Error';
import { useAxios } from '../../hooks';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';
import { BookCardList } from './components/BookCardList';

export const BookList = () => {
  const { data: books, error, loading } = useAxios(getBookList, true);
  const [currentPage, setCurrentPage] = useState(
    Number(localStorage.getItem('page')) || 1
  );

  const booksPerPage = 10;
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books && books.slice(firstBookIndex, lastBookIndex);

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  const savePageIndex = useCallback(
    () => localStorage.setItem('page', currentPage),
    [currentPage]
  );

  useEffect(() => {
    window.addEventListener('beforeunload', savePageIndex);

    return () => {
      savePageIndex();
      window.removeEventListener('beforeunload', savePageIndex);
    };
  }, [savePageIndex]);

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
