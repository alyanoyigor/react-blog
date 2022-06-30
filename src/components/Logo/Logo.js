import React from 'react';
import { StyledBlogIcon, StyledLogo, StyledLogoText } from './styled';

export const Logo = () => {
  return (
    <StyledLogo>
      <StyledBlogIcon />
      <StyledLogoText>log('Hello world!')</StyledLogoText>
    </StyledLogo>
  );
};
