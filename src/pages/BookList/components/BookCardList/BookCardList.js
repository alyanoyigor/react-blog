import React from 'react';
import { BookCard } from '../../components/BookCard';
import { StyledBookList } from './styled';

export const BookCardList = (props) => {
  const { bookList, handleEditModalOpen, handleDeleteModalOpen } = props;

  return (
    <StyledBookList>
      {bookList.map((bookItem) => (
        <BookCard
          handleEditModalOpen={handleEditModalOpen}
          handleDeleteModalOpen={handleDeleteModalOpen}
          key={bookItem._id}
          data={bookItem}
        />
      ))}
    </StyledBookList>
  );
};
