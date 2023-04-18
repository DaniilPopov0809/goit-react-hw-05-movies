import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  /* z-index: 1200; */
`;

export const CloseModal = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: var(--accent-color);
  }

  &:active {
    color: var(--accent-color);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 40px 15px;
`;
