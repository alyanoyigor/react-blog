import React from 'react';
import { getBookList } from '../../api/books';
import { Error } from '../../components/Error';
import { useAxios } from '../../hooks';
import { Preloader } from '../../components/Preloader';
import { BookCard } from './components/BookCard';
import { StyledBookList } from './styled';

export const BookList = () => {
  const { data: bookList, error, loading } = useAxios(getBookList, true);

  return (
    <>
      {loading && !error && <Preloader />}
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
