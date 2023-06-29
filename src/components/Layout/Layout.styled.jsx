import styled from '@emotion/styled';

export const Wrapp = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background: var(--bg-footer-header);
  box-shadow: var(--shadow);
`;



export const BurgerButtonWrap = styled.div`
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    display: none;
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

export const Footer = styled.footer`
  background: var(--bg-footer-header);
  margin-top: auto;
  box-shadow: var(--shadow);
`;
