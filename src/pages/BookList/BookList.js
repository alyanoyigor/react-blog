import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { getBookList } from '../../api/books';
import { Error } from '../../components/Error';
import { BookCard } from './components/BookCard';
import { StyledBookList } from './styled';

export const BookList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState();
  const [error, setError] = useState();

  const getBooks = async () => {
    try {
      setIsLoading(true);
      const books = await getBookList();
      setBookList(books);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {error && !isLoading && !bookList && <Error>{error}</Error>}
      {isLoading && !bookList && !error && <CircularProgress />}
      {bookList && !isLoading && !error && (
        <StyledBookList>
          {bookList.map((bookItem) => (
            <BookCard key={bookItem.id} {...bookItem} />
          ))}
        </StyledBookList>
      )}
    </>
  );
};
