import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 2px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: 500;

  &.active {
    color: white;
    border: 4px solid #3f51b5;
    border-radius: 6px;
  }
`;
