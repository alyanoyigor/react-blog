import React from 'react';
import { BookCard } from '../../components/BookCard';
import { StyledBookList } from './styled';

export const BookCardList = (props) => {
  const { bookList } = props;

  return (
    <StyledBookList>
      {bookList.map((bookItem, index) => (
        <BookCard key={bookItem._id} index={index} {...bookItem} />
      ))}
    </StyledBookList>
  );
};
