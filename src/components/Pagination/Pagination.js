import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import {
  StyledIcon,
  StyledList,
  StyledListItem,
  StyledListItemButton,
} from './styled';

export const Pagination = (props) => {
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
            theme={theme}
            disabled={previousPageIndex === 0}
            onClick={() => onPaginate(previousPageIndex)}
          >
            <StyledIcon as={ArrowBackIosNew} />
          </StyledListItemButton>
        </StyledListItem>
        {pageNumbers.map((number) => (
          <StyledListItem key={number}>
            <StyledListItemButton
              theme={theme}
              className={currentPage === number ? 'active' : ''}
              onClick={() => onPaginate(number)}
            >
              {number}
            </StyledListItemButton>
          </StyledListItem>
        ))}
        <StyledListItem>
          <StyledListItemButton
            theme={theme}
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

Pagination.defaultProps = {
  theme: 'dark',
};

Pagination.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  itemsPerPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};
