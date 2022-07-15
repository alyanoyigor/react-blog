// import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import styledEngine from '@mui/styled-engine';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const StyledButton = styledEngine(LoadingButton)`
  width: 100px;
`;
