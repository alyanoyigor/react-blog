import styled from 'styled-components';

export const StyledCardMenu = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

export const StyledMenuButton = styled.button`
  display: flex;
  align-items: center;
  color: #000000;
  height: 25px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  text-decoration: none;
  text-align: start;
  padding: 0 0 0 4px;
  cursor: pointer;

  &:hover {
    background-color: #d6e1ff;
  }
`;
