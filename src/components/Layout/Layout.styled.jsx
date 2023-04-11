import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
/* display: flex;
justify-content: space-between;
align-items: center; */
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 20px;

  /* @media screen and (max-width: 767px) {
    justify-content: space-around;
  } */

  border-bottom: 1px solid var(--link-color);

  padding: 10px 0;
`;



export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

export const LinkNav = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 10px;

  border-radius: 15px;
  border: 1px solid var(--link-color);

  font-size: 32px;
  color: var(--link-color);

  transition: color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    border-color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;

export const Container = styled.div`
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;

  box-sizing: border-box;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const FooterWrappper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.p`
  margin-bottom: 5px;
  color: var(--link-color);
`;

export const MailLink = styled.a`
  display: block;
  color: var(--link-color);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: var(--accent-color);
  }
`;
