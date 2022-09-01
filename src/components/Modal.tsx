import React from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/svg/close-icon.svg';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible = false, children, onClose = () => {} }) => {
  return (
    <>
      {visible && (
        <ModalOverlay>
          <ModalWindow>
            <ButtonClose onClick={onClose} />
            <ModalMessage>{children}</ModalMessage>
          </ModalWindow>
        </ModalOverlay>
      )}
    </>
  );
};

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--modal-background);
  z-index: 1;
`;

const ModalWindow = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  margin: 20px;
  border: 3px solid var(--primary);
  background-color: var(--main-background);
  border-radius: 20px;
  z-index: 2;
`;

const ButtonClose = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: url(${closeIcon}) transparent no-repeat;
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: saturate(0%) brightness(200%);
  }
`;

const ModalMessage = styled.div`
  height: 80vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Modal;
