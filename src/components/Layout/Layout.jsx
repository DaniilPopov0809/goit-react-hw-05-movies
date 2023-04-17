import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ButtonToTop } from '../ButtonToTop/ButtonToTop';
import Toggle from '../Toggle/Toggle';
import {
  ThemeContext,
  themes,
} from '../../contexts/ThemeContexts/ThemeContext';

import {
  Container,
  Copyright,
  FooterWrappper,
  LoaderWrapper,
  MailLink,
  Header,
  BurgerButtonWrap
} from './Layout.styled';
import { BurgerModal } from 'components/BurgerModal/BurgerModal';
import { BurgerButton } from 'components/BurgerButton/BurgerButton';



const Layout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSizeWindow, setIsSizeWindow] = useState(false);

  useEffect(() => {
    windowSize();
    window.addEventListener('resize', windowSize);

    return () => {
      window.removeEventListener('resize', windowSize);
    };
  }, [isSizeWindow]);

  useEffect(() => {
     const targetElement = document.querySelector('body');
    if(isOpenModal) {
      disableBodyScroll(targetElement);
    }
    return () => {
        enableBodyScroll(targetElement);
    };
  }, [isOpenModal])

  const windowSize = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setIsOpenModal(false);
      setIsSizeWindow(true);

    } else {
      setIsSizeWindow(false);
    }
  };

  const getStatusModal = status => {
    setIsOpenModal(status);
  };

  return (
    <Container>
      <Header>
        <BurgerButtonWrap>
        <BurgerButton
          getStatusModal={getStatusModal}
          isOpenModal={isOpenModal}
        />
        </BurgerButtonWrap>
        {isOpenModal && (
          <BurgerModal
            getStatusModal={getStatusModal}
            isOpenModal={isOpenModal}
          />
        )}
        {isSizeWindow && <Navigation />}
        { isSizeWindow && <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
             <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            /> 
          )}
        </ThemeContext.Consumer> }
        {!isSizeWindow && isOpenModal && <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
             <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            /> 
          )}
        </ThemeContext.Consumer>}
      </Header>
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
      <ButtonToTop />
    </Container>
  );
};

export default Layout;
