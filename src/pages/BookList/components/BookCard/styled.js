import { Card } from '@mui/material';
import styledEngine from '@mui/styled-engine';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const StyledCardContainer = styled.div`
  width: 100%;

  @media (min-width: 425px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.3%;
  }

  @media (min-width: 1440px) {
    width: 25%;
  }
`;

export const StyledBookCard = styledEngine(Card)`
  position: relative;
  margin: 4px;
  padding: 8px;
  background-color: #fafafa;
`;

export const StyledText = styled.p`
  letter-spacing: 0.5px;
`;

export const StyledShortText = styled(StyledText)`
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
