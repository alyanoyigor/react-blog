import React from 'react';
import { CircularProgress } from '@mui/material';
import { getBookList } from '../../api/books';
import { Error } from '../../components/Error';
import { BookCard } from './components/BookCard';
import { StyledBookList } from './styled';
import { useAxios } from '../../hooks';

export const BookList = () => {
  const { data: bookList, error, loading } = useAxios(getBookList);

  return (
    <>
      {loading && !bookList && !error && <CircularProgress />}
      {bookList && !loading && !error && (
        <StyledBookList>
          {bookList.map((bookItem) => (
            <BookCard key={bookItem.id} {...bookItem} />
          ))}
        </StyledBookList>
      )}
      {error && !loading && <Error>{error}</Error>}
    </>
  );
};
