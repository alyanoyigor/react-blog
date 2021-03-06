import React from 'react';
import PropTypes from 'prop-types';

import { BookCard } from '../../components/BookCard';
import { bookType } from '../../../../propTypes/bookType';
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

BookCardList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
  handleEditModalOpen: PropTypes.func.isRequired,
  handleDeleteModalOpen: PropTypes.func.isRequired,
};
