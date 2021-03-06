import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  & .special-title {
    margin: 0;
    padding-top: 16px;
    font-size: 64px;
    background: radial-gradient(
      53.87% 5889.12% at 44.59% 58.82%,
      #bd3ff6 0,
      #66d9fb 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 300px;

  & img {
    z-index: 1;
    border-radius: 50%;
  }
`;

export const StyledCircle = styled.span`
  left: 16px;
  top: 16px;
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    53.87% 5889.12% at 44.59% 58.82%,
    #bd3ff6 0,
    #66d9fb 100%
  );
  border-radius: 50%;
  display: inline-block;
`;

export const StyledAuthorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 24px;
  }
`;
