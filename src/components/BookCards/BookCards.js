import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { URLS } from '../../constants';
import { BookCard } from './BookCard';
import { StyledBookList } from './styled';

export const BookCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookList, setBookList] = useState([]);

  const getBookList = async () => {
    try {
      setIsLoading(true);
      const books = await axios.get(URLS.BOOKS);
      setBookList(books.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <StyledBookList>
      {bookList.map((bookItem) => (
        <BookCard key={bookItem.id} {...bookItem} />
      ))}
    </StyledBookList>
  );
};
