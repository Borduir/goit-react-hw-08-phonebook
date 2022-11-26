import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  border: 1px solid orangered;
  color: orangered;
  border-radius: 4px;
  padding: 5px 10px;
  &:hover {
    border: 2px solid orangered;
  }
  &.active {
    background-color: orangered;
    border: 2px solid orangered;
    color: white;
  }
`;
