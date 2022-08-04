import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BlogIcon } from '../../assets/svg/blogIcon.svg';

export const StyledLogo = styled(NavLink).attrs({ to: '/' })`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: inherit;
  gap: 8px;
  flex-shrink: 0;

  &.active {
    pointer-events: none;
  }
`;

export const StyledLogoText = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-family: 'PT Mono', monospace;
`;

export const StyledBlogIcon = styled(BlogIcon)`
  fill: #ffffff;
  width: 40px;
  height: 40px;
`;
