import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-size: 18px;
  text-decoration: none;
  padding-bottom: 4px;
  color: inherit;
  transform: color 0.2s ease;

  &.active:after {
    position: absolute;
    background-color: #ffffff;
    content: '';
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;
