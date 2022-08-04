import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { StyledCardContainer } from '../BookCard/styled';
import { StyledBookList } from '../BookCardList/styled';
import { StyledSkeleton } from './styled';

type BookCardListSkeletonProps = {
  booksCount: number;
};

export const BookCardListSkeleton = (props: BookCardListSkeletonProps) => {
  const { booksCount } = props;

  const bookIndexes = Array.from(Array(booksCount), (_book, index) => index);

  const paginationIndexes = Array.from(Array(5), (_book, index) => index);

  return (
    <>
      <StyledBookList>
        {bookIndexes.map((number) => (
          <StyledCardContainer key={number}>
            <div>
              <StyledSkeleton height="325px" sx={{ bgcolor: 'grey.900' }} />
            </div>
          </StyledCardContainer>
        ))}
      </StyledBookList>
      <Box display="flex" gap="4px" m="16px 0">
        {paginationIndexes.map((id) => (
          <StyledSkeleton
            key={id}
            variant="circular"
            width="40px"
            height="40px"
            sx={{ bgcolor: 'grey.900' }}
          />
        ))}
      </Box>
    </>
  );
};

BookCardListSkeleton.propTypes = {
  booksCount: PropTypes.number.isRequired,
};
