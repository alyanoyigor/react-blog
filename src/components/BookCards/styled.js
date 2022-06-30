import styled from 'styled-components';

export const StyledBookList = styled.div`
  display: grid;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: flex-start;
  padding: 20px 0 20px 0;
  margin: 0;
  grid-template-columns: repeat(1, 100%);

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 33.3%);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 25%);
  }
`;
