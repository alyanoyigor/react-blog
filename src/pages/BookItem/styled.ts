import styledEngine from '@mui/styled-engine';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const StyledButton = styledEngine(IconButton)`
  color: #fafafa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 20px;

  & .icon {
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
`;

export const StyledBackIcon = styledEngine(ArrowBackIcon)`
  color: #ffffff;
`;
