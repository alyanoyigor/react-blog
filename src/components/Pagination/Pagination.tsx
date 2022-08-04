import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import {
  StyledIcon,
  StyledList,
  StyledListItem,
  StyledListItemButton,
} from './styled';

const defaultProps = {
  theme: 'dark',
};

type PaginationProps = {
  itemsPerPage: number;
  itemsCount: number;
  currentPage: number;
  onPaginate: (index: number) => void;
  theme?: 'dark' | 'light';
} & typeof defaultProps;

export const Pagination = (props: PaginationProps) => {
  const { itemsPerPage, itemsCount, currentPage, onPaginate, theme } = props;

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
          <StyledListItemButton
            mode={theme}
            disabled={previousPageIndex === 0}
            onClick={() => onPaginate(previousPageIndex)}
          >
            <StyledIcon as={ArrowBackIosNew} />
          </StyledListItemButton>
        </StyledListItem>
        {pageNumbers.map((number) => (
          <StyledListItem key={number}>
            <StyledListItemButton
              mode={theme}
              className={currentPage === number ? 'active' : ''}
              onClick={() => onPaginate(number)}
            >
              {number}
            </StyledListItemButton>
          </StyledListItem>
        ))}
        <StyledListItem>
          <StyledListItemButton
            mode={theme}
            onClick={() => onPaginate(nextPageIndex)}
            disabled={nextPageIndex === maxPageIndex + 1}
          >
            <StyledIcon as={ArrowForwardIos} />
          </StyledListItemButton>
        </StyledListItem>
      </StyledList>
    </nav>
  );
};

Pagination.defaultProps = defaultProps;

Pagination.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  itemsPerPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};
