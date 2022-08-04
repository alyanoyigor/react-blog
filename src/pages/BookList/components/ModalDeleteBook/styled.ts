import { LoadingButton } from '@mui/lab';
import styledEngine from '@mui/styled-engine';
import styled from 'styled-components';

export const StyledButton = styledEngine(LoadingButton)`
  width: 100px;
`;

export const StyledBookTitle = styled.span`
  font-weight: 700;
  font-style: italic;
  color: #d32f2f;
`;
