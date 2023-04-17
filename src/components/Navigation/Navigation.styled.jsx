import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px 0;
  gap: 20px;
  

  @media screen and (max-width: 767px) {
    flex-direction: column; 
    width: 100%;
  }

  @media screen and (min-width: 768px) {
  border-bottom: 1px solid var(--link-color);
  }
`;

export const NavItem = styled.li`
  /* &:not(:last-child) {
    margin-right: 20px;
  } */
  
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

export const LinkNav = styled(NavLink)`
  display: flex;
  padding: 5px 10px;

  @media screen and (min-width: 768px) {
    border-radius: 15px;
    border: 1px solid var(--link-color);
    align-items: center;
  }

 

  font-size: 32px;
  color: var(--link-color);

  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border-color: var(--accent-color);

    @media screen and (max-width: 767px) {
   background-color: var(--burger-bg-link-color);
  }
  }

  &.active {
    color: var(--accent-color);
  }
`;
