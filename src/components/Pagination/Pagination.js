import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import {
  StyledIcon,
  StyledList,
  StyledListItem,
  StyledListItemBtn,
} from './styled';

export const Pagination = (props) => {
  const { itemsPerPage, itemsCount, currentPage, onPaginate } = props;

  const maxPageIndex = Math.ceil(itemsCount / itemsPerPage);
  const pageNumbers = Array.from(
    Array(maxPageIndex),
    (_value, index) => index + 1
  );

  const previousPageIndex = currentPage - 1;
  const nextPageIndex = currentPage + 1;

  return (
    <nav>
      <StyledList>
        <StyledListItem>
          <StyledListItemBtn
            disabled={previousPageIndex === 0}
            onClick={() => onPaginate(previousPageIndex)}
          >
            <StyledIcon as={ArrowBackIosNew} />
          </StyledListItemBtn>
        </StyledListItem>
        {pageNumbers.map((number) => (
          <StyledListItem key={number}>
            <StyledListItemBtn
              className={currentPage === number ? 'active' : ''}
              onClick={() => onPaginate(number)}
            >
              {number}
            </StyledListItemBtn>
          </StyledListItem>
        ))}
        <StyledListItem>
          <StyledListItemBtn
            onClick={() => onPaginate(nextPageIndex)}
            disabled={nextPageIndex === maxPageIndex + 1}
          >
            <StyledIcon as={ArrowForwardIos} />
          </StyledListItemBtn>
        </StyledListItem>
      </StyledList>
    </nav>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};
