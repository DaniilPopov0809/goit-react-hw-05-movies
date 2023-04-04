import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkNav } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import { ButtonTop } from '../ButtonTop/ButtonTop';

import {
  NavList,
  NavItem,
  Container,
  LinkWrap,
  Copyright,
  FooterWrappper,
  LoaderWrapper,
  MailLink,
} from './Layout.styled';
import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';

const Layout = () => {
  return (
    <Container>
      <header>
        <NavList>
          <NavItem>
            <LinkNav to="/">
              <AiFillHome />
              <LinkWrap>Home</LinkWrap>
            </LinkNav>
          </NavItem>
          <NavItem>
            <LinkNav to="/movies">
              <MdLocalMovies />
              <LinkWrap>Movies</LinkWrap>
            </LinkNav>
          </NavItem>
        </NavList>
      </header>
      <main>
        
        <Suspense
          fallback={
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          }
        >
          
          <Outlet />
          
        </Suspense>
      </main>
      <footer>
        <FooterWrappper>
          <Copyright>©2023 Daniil Popov</Copyright>
          <MailLink href="mailto:x6uhrox@gmail.com">x6uhrox@gmail.com</MailLink>
        </FooterWrappper>
      </footer>
      <ButtonTop />
    </Container>
  );
};

export default Layout;
