import React from 'react';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { StyledContainer, StyledHeader } from './styled';

export const Header = () => (
  <StyledHeader>
    <StyledContainer maxWidth="xl">
      <Logo />
      <Nav />
    </StyledContainer>
  </StyledHeader>
);
