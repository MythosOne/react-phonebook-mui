import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Home } from '@mui/icons-material';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: 500;

  &.active {
    color: white;
    transition: 350ms color;
    border: 4px solid #3f51b5;
    border-radius: 6px;
  }
`;

export const HomeIcon = styled(Home)`
  color: inherit;
`;
