import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import ButtonToTop from '../ButtonToTop/ButtonToTop';
import ToggleContext from 'components/ToggleContext/ToggleContext';

import {
  Container,
  Copyright,
  FooterWrappper,
  LoaderWrapper,
  MailLink,
  Header,
  BurgerButtonWrap,
  Footer,
  Wrapp,
} from './Layout.styled';
import BurgerModal from 'components/BurgerModal/BurgerModal';
import BurgerButton from 'components/BurgerButton/BurgerButton';

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
    if (isOpenModal) {
      disableBodyScroll(targetElement);
    }
    return () => {
      enableBodyScroll(targetElement);
    };
  }, [isOpenModal]);

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
    <Wrapp>
      <Header>
        <Container>
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
          {isSizeWindow && <ToggleContext />}
          {!isSizeWindow && isOpenModal && <ToggleContext />}
        </Container>
      </Header>

      <main>
        <Container>
          <Suspense
            fallback={
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer>
        <Container>
          <FooterWrappper>
            <Copyright>
              All rights reserved © {new Date().getFullYear()} by Daniil Popov
            </Copyright>
            <MailLink href="mailto:x6uhrox@gmail.com">
              x6uhrox@gmail.com
            </MailLink>
          </FooterWrappper>
        </Container>
      </Footer>
      <ButtonToTop />
    </Wrapp>
  );
};

export default Layout;
