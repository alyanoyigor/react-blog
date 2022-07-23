import { Card, Typography } from '@mui/material';
import styledEngine from '@mui/styled-engine';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const StyledCardContainer = styled.div`
  width: 100%;
  margin: 0;
  margin-bottom: 8px;

  @media (min-width: 425px) {
    width: 50%;

    & > div {
      margin-right: 4px;
    }

    &:nth-of-type(even) > div {
      margin-right: 0;
      margin-left: 4px;
    }
  }

  @media (min-width: 768px) {
    width: 33.3%;

    & > div {
      margin: 0 4px;
    }

    &:nth-of-type(even) > div {
      margin-right: 4px;
    }

    &:nth-of-type(3n + 1) > div {
      margin: 0;
      margin-right: 4px;
    }

    &:nth-of-type(3n) > div {
      margin: 0;
      margin-left: 4px;
    }
  }

  @media (min-width: 1440px) {
    width: 25%;

    & > div,
    &:nth-of-type(even) > div,
    &:nth-of-type(3n) > div,
    &:nth-of-type(3n + 1) > div {
      margin: 0 4px;
    }

    &:nth-of-type(4n + 1) > div {
      margin: 0;
      margin-right: 4px;
    }

    &:nth-of-type(4n) > div {
      margin: 0;
      margin-left: 4px;
    }
  }
`;

export const StyledBookCard = styledEngine(Card)`
  position: relative;
  background-color: #fafafa;
`;

export const StyledShortText = styledEngine(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;

export const StyledIconButton = styledEngine(IconButton)`
  position: absolute;
  right: 4px;
  top: 4px;
`;
