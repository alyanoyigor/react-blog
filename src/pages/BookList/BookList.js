import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';
import { BookCardList } from './components/BookCardList';

import * as selectors from './selectors/bookList';
import { useState } from 'react';
import { bookListFetchStart } from './actions/bookList';

export const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const booksPerPage = 10;

  const books = useSelector((state) => selectors.bookListDataSelector(state));
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = books.slice(firstBookIndex, lastBookIndex);

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(bookListFetchStart());
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
