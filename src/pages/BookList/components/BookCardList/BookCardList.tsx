import React from 'react';
import PropTypes from 'prop-types';

import { bookType } from '../../../../propTypes/bookType';
import { Book } from '../../../../types';
import { BookCard } from '../BookCard';
import { StyledBookList } from './styled';

type BookCartListProps = {
  bookList: Book[];
  handleEditModalOpen: (data: Book) => void;
  handleDeleteModalOpen: (data: Book) => void;
};

export const BookCardList = (props: BookCartListProps) => {
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

BookCardList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
  handleEditModalOpen: PropTypes.func.isRequired,
  handleDeleteModalOpen: PropTypes.func.isRequired,
};
