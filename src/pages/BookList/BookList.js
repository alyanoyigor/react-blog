import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';
import { paginationChangePage } from '../../components/Pagination/reducers/pagination';
import { Modal } from '../../components/Modal';
import { BookForm } from './components/BookForm';
import { BookCardList } from './components/BookCardList';
import { bookListFetchStart } from './reducers/bookList';

import * as selectors from './selectors/bookList';

export const BookList = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    dispatch(bookListFetchStart());
  }, [dispatch]);

  return (
    <>
      {loading && !error && <Preloader />}
      {!loading && !error && (
        <>
          <Box textAlign="right" mb={1}>
            <Button
              onClick={() => setIsOpenModal(true)}
              variant="contained"
              color="secondary"
            >
              Create Book
            </Button>
          </Box>
          <BookCardList bookList={currentBooks} />
          <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
            <Typography mb={1} textAlign="center" variant="h5" component="h1">
              Create book
            </Typography>
            <BookForm onCloseModal={handleCloseModal} />
          </Modal>
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
