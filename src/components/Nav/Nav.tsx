import React from 'react';
import { StyledNav, StyledNavLink } from './styled';

export const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/books">Books</StyledNavLink>
      <StyledNavLink to="/statistics">Statistics</StyledNavLink>
    </StyledNav>
  );
};
