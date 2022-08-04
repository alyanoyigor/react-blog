import { Container } from '@mui/material';
import styled from 'styled-components';
import styledEngine from '@mui/styled-engine';

export const StyledHeader = styled.header`
  padding: 20px 0;
`;

export const StyledContainer = styledEngine(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
