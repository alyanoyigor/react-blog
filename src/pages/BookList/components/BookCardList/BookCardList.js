import React from 'react';
import { BookCard } from '../../components/BookCard';
import { StyledBookList } from './styled';

export const BookCardList = (props) => {
  const { bookList } = props;

  return (
    <StyledBookList>
      {bookList.map((bookItem) => (
        <BookCard key={bookItem.id} {...bookItem} />
      ))}
    </StyledBookList>
  );
};
