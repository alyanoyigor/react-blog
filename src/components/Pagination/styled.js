import styled from 'styled-components';
import { IconButton } from '@mui/material';
import styledEngine from '@mui/styled-engine';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  list-style-type: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
`;

export const StyledListItemBtn = styledEngine(IconButton)`
  width: 40px;
  height: 40px;
  color: #fafafa;

  & .icon-pagination {
    color: #ffffff;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.08);

    &:hover {
      background-color: rgba(255, 255, 255, 0.12);
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }

  &:disabled {
    & .icon-pagination {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const StyledIcon = styled.div.attrs({ className: 'icon-pagination' })`
  color: #ffffff;
`;
