import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';

import { Overlay, Modal, CloseModal, Wrapper } from './BurgerModal.styled';
import { BurgerButton } from 'components/BurgerButton/BurgerButton';
import Navigation from 'components/Navigation/Navigation';

const modalRoot = document.querySelector('#modal-root');

export function BurgerModal({ getStatusModal, isOpenModal }) {
  const onCloseModal = () => {
    getStatusModal(false);
  };

  return createPortal(
    <>
      <Overlay onClick={onCloseModal}>
        <Modal>
          <Wrapper>
            <BurgerButton
              getStatusModal={getStatusModal}
              isOpenModal={isOpenModal}
            />
            <CloseModal type="button" onClick={onCloseModal}>
              <RxCross1 size={25} />
            </CloseModal>
          </Wrapper>
          {isOpenModal && <Navigation />}
        </Modal>
      </Overlay>
    </>,
    modalRoot
  );
}

BurgerModal.propTypes = {
  getStatusModal: PropTypes.func,
  isOpenModal: PropTypes.bool,
};
