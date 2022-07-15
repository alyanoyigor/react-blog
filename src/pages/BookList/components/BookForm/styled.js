import { Button } from '@mui/material';
import styledEngine from '@mui/styled-engine';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const StyledButton = styledEngine(Button)`
  width: 100px;
`;
