import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';

import { paginationChangePage } from '../../components/Pagination/reducers/pagination';
import { modalToggleOpen } from '../../components/Modal/reducers/modal';

import { ModalCreateBook } from './components/ModalCreateBook';
import { BookCardList } from './components/BookCardList';
import { bookListFetchStart } from './reducers/bookList';

import * as selectors from './selectors/bookList';

export const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectors.bookListDataSelector);
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);

  const { booksPerPage, currentPage } = useSelector(
    selectors.bookListPaginationSelector
  );
  const currentBooks = useSelector(selectors.bookListCurrentBooksSelector);

  const handlePaginate = (pageNumber) => {
    dispatch(paginationChangePage({ page: pageNumber }));
  };

  const onClickCreateBook = () => {
    dispatch(modalToggleOpen());
  };

  useEffect(() => {
    dispatch(bookListFetchStart());
  }, [dispatch]);

  return (
    <>
      {loading && !error && <Preloader />}
      {currentBooks && !error && (
        <>
          <Box textAlign="right" mb={1}>
            <Button
              onClick={onClickCreateBook}
              variant="contained"
              color="secondary"
            >
              Create Book
            </Button>
          </Box>
          <BookCardList bookList={currentBooks} />
          <ModalCreateBook />
        </>
      )}
      {books.length > booksPerPage && !loading && !error && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={booksPerPage}
          itemsCount={books.length}
          onPaginate={handlePaginate}
        />
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
