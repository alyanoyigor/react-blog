import styled from 'styled-components';
import { ReactComponent as BlogIcon } from '../../assets/svg/blogIcon.svg';

export const StyledLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;
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
