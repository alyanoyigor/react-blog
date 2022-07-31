import React from 'react';
import AuthorImagePath from '../../../../assets/img/authorImage.jpeg';
import {
  StyledAuthorInfoContainer,
  StyledCircle,
  StyledImageContainer,
  StyledTitle,
} from './styled';

console.log(AuthorImagePath);

export const AuthorInfo = () => {
  return (
    <StyledAuthorInfoContainer>
      <StyledTitle>
        Hi, I’m Igor
        <p className="special-title">Frontend Developer</p>
      </StyledTitle>
      <StyledImageContainer>
        <img src={AuthorImagePath} alt="Igor Alyanoy" />
        <StyledCircle />
      </StyledImageContainer>
    </StyledAuthorInfoContainer>
  );
};
