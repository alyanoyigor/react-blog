import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';
import { paginationChangePage } from '../../components/Pagination/reducers/pagination';
import * as paginationSelectors from '../../components/Pagination/selectors/pagination';
import { BookCardList } from './components/BookCardList';
import { bookListFetchStart } from './reducers/bookList';

import * as selectors from './selectors/bookList';

export const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector(selectors.bookListDataSelector);
  const loading = useSelector(selectors.bookListLoadingSelector);
  const error = useSelector(selectors.bookListErrorSelector);

  const booksPerPage = useSelector(
    paginationSelectors.paginationItemsPerPageSelector
  );
  const currentPage = useSelector(
    paginationSelectors.paginationCurrentPageSelector
  );
  const lastBookIndex = useSelector(paginationSelectors.lastItemIndexSelector);
  const firstBookIndex = useSelector(
    paginationSelectors.firstItemIndexSelector
  );

  const currentBooks = books.slice(firstBookIndex, lastBookIndex);

  const handlePaginate = (pageNumber) => {
    dispatch(paginationChangePage({ page: pageNumber }));
  };

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
