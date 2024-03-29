import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { Error } from '../../components/Error';
import { Pagination } from '../../components/Pagination';
import { Preloader } from '../../components/Preloader';
import { paginationChangePage } from '../../store/pagination/reducer/pagination';

import { ModalDeleteBook } from './components/ModalDeleteBook';
import { ModalCreateBook } from './components/ModalCreateBook';
import { ModalEditBook } from './components/ModalEditBook';
import { BookCardList } from './components/BookCardList';
import { bookListFetchStart } from './thunks/bookListFetch';

import * as selectors from './selectors/bookList';
import { modalOpen, modalClose } from '../../store/modal/reducer/modal';
import { modalStateSelector } from '../../store/modal/selectors/modal';
import { MODAL_NAME } from '../../store/modal/constants/modal';

import { bookListEditBookStart } from './thunks/bookListEditBook';
import { deleteActions } from './reducers/bookListDeleteBook';
import { bookListDeleteBookStart } from './thunks/bookListDeleteBook';
import { bookListCreateBookStart } from './thunks/bookListCreateBook';
import {
  bookListEditBookResetData,
  bookListGetEditBookFetchData,
} from './reducers/bookListEditBook';
import { bookListResetData } from './reducers/bookListFetch';
import { BookCardListSkeleton } from './components/BookCardListSkeleton';

import { StyledCreateButton } from './styled';
import { useAppDispatch } from '../../store';
import { Book, BookCreate } from '../../types';

export const BookList = () => {
  const dispatch = useAppDispatch();

  const {
    data: books,
    loading,
    error,
  } = useSelector(selectors.bookListFetchSelector);

  const { loading: createLoading } = useSelector(
    selectors.bookListCreateSelector
  );
  const {
    data: editData,
    fetchData: editFetchData,
    submitLoading: submitEditLoading,
    fetchLoading: fetchEditLoading,
  } = useSelector(selectors.bookListEditSelector);
  const { data: deleteData, loading: deleteLoading } = useSelector(
    selectors.bookListDeleteSelector
  );

  const { open, name } = useSelector(modalStateSelector);

  const { booksPerPage, currentPage } = useSelector(
    selectors.bookListPaginationSelector
  );
  const currentBooks = useSelector(selectors.bookListCurrentBooksSelector);

  const handlePaginate = useCallback(
    (pageNumber: number) => {
      dispatch(paginationChangePage({ page: pageNumber }));
    },
    [dispatch]
  );

  const onClickCreateBook = useCallback(() => {
    dispatch(modalOpen({ name: MODAL_NAME.BOOK_CREATE }));
  }, [dispatch]);

  const handleEditModalOpen = useCallback(
    (bookData: Book) => {
      dispatch(bookListGetEditBookFetchData({ data: bookData }));
      dispatch(modalOpen({ name: MODAL_NAME.BOOK_EDIT }));
    },
    [dispatch]
  );

  const handleDeleteModalOpen = useCallback(
    (deletedBookData: Book) => {
      dispatch(
        deleteActions.bookListGetDeletedBookData({ data: deletedBookData })
      );
      dispatch(modalOpen({ name: MODAL_NAME.BOOK_DELETE }));
    },
    [dispatch]
  );

  const handleModalClose = useCallback(() => {
    dispatch(modalClose());
  }, [dispatch]);

  const handleEditModalClose = useCallback(() => {
    dispatch(modalClose());
    dispatch(bookListEditBookResetData());
  }, [dispatch]);

  const handleDeleteModalClose = useCallback(() => {
    dispatch(modalClose());
    dispatch(deleteActions.bookListResetDeleteBookData());
  }, [dispatch]);

  const handleDeleteBookSubmit = useCallback(
    (id: string) => {
      dispatch(bookListDeleteBookStart({ id }));
    },
    [dispatch]
  );

  const handleEditBookSubmit = useCallback(
    (data: Book) => {
      dispatch(
        bookListEditBookStart({ bookData: { bookOptions: data, id: data._id } })
      );
    },
    [dispatch]
  );

  const handleCreateBookSubmit = useCallback(
    (data: BookCreate) => {
      dispatch(bookListCreateBookStart({ bookData: data }));
    },
    [dispatch]
  );

  useEffect(() => {
    const promise = dispatch(bookListFetchStart());
    return () => {
      promise.abort();
      dispatch(bookListResetData());
    };
  }, [dispatch]);

  return (
    <>
      {loading && !error && books.length > 0 && <Preloader />}
      {!error && (
        <Box textAlign="right" mb={1}>
          <StyledCreateButton
            onClick={onClickCreateBook}
            variant="contained"
            color="secondary"
          >
            Create Book
          </StyledCreateButton>
        </Box>
      )}
      {loading && !error && books.length === 0 && (
        <BookCardListSkeleton booksCount={booksPerPage} />
      )}
      {!error && (
        <>
          {books.length > 0 && (
            <BookCardList
              handleEditModalOpen={handleEditModalOpen}
              handleDeleteModalOpen={handleDeleteModalOpen}
              bookList={currentBooks}
            />
          )}
          {books.length === 0 && !loading && <h1>Nothing was found</h1>}
          {books.length > booksPerPage && (
            <Pagination
              currentPage={currentPage}
              itemsPerPage={booksPerPage}
              itemsCount={books.length}
              onPaginate={handlePaginate}
            />
          )}
        </>
      )}
      {error && !loading && <Error>{error}</Error>}
      <ModalCreateBook
        handleClose={handleModalClose}
        loading={createLoading}
        handleCreateBook={handleCreateBookSubmit}
        open={open && name === MODAL_NAME.BOOK_CREATE}
      />
      {open && name === MODAL_NAME.BOOK_EDIT && (
        <ModalEditBook
          fetchLoading={fetchEditLoading}
          bookOptions={editData}
          fetchData={editFetchData}
          handleClose={handleEditModalClose}
          loading={submitEditLoading}
          handleEditBook={handleEditBookSubmit}
          open={open && name === MODAL_NAME.BOOK_EDIT}
        />
      )}
      <ModalDeleteBook
        bookData={deleteData}
        handleClose={handleDeleteModalClose}
        loading={deleteLoading}
        onDelete={handleDeleteBookSubmit}
        open={open && name === MODAL_NAME.BOOK_DELETE}
      />
    </>
  );
};
