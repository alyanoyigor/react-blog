import styled from 'styled-components';
import { IconButton, styled as styledMUI } from '@mui/material';

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

export const StyledListItemButton = styledMUI(IconButton)((props) => ({
  width: '40px',
  height: '40px',
  color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',

  '& .icon-pagination': {
    color: props.theme === 'dark' ? '#fafafa' : '#0a0a0a',
  },

  '&.active': {
    backgroundColor:
      props.theme === 'dark'
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(0, 0, 0, 0.08)',

    '&:hover': {
      backgroundColor:
        props.theme === 'dark'
          ? 'rgba(255, 255, 255, 0.12)'
          : 'rgba(0, 0, 0, 0.12)',
    },
  },

  '&:hover': {
    backgroundColor:
      props.theme === 'dark'
        ? 'rgba(255, 255, 255, 0.04)'
        : 'rgba(0, 0, 0, 0.04)',
  },

  '&:disabled': {
    '& .icon-pagination': {
      color:
        props.theme === 'dark'
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(0, 0, 0, 0.3)',
    },
  },
}));

export const StyledIcon = styled.div.attrs({ className: 'icon-pagination' })``;
