import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardContainer } from '../BookCard/styled';
import { StyledBookList } from '../BookCardList/styled';
import { StyledSkeleton } from './styled';

export const BookCardListSkeleton = (props) => {
  const { booksCount } = props;

  const bookIndexesArray = Array.from(
    Array(booksCount),
    (_book, index) => index
  );

  return (
    <StyledBookList>
      {bookIndexesArray.map((number) => (
        <StyledCardContainer key={number}>
          <StyledSkeleton sx={{ bgcolor: 'grey.900' }} />
        </StyledCardContainer>
      ))}
    </StyledBookList>
  );
};

BookCardListSkeleton.propTypes = {
  booksCount: PropTypes.number.isRequired,
};
