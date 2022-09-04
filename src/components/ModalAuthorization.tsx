import React, { useContext, useState } from 'react';
import Modal, { ModalProps } from './Modal';
import Button from './Button';
import accessIco from '../assets/svg/access.svg';
import styled from 'styled-components';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

const ModalAuthorization: React.FC<ModalProps> = ({ visible = false, onClose = () => {} }) => {
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);
  let navigate = useNavigate();

  const mainDirect = () => {
    navigate('/');
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      {isRegistration ? (
        <>
          <ModalAccess $isRegistration src={accessIco} alt="access" />
          <ModalTitle $isRegistration>Регистрация</ModalTitle>
          <ModalInput type="text" placeholder="Имя *" onChange={event => setName(event.target.value)} value={name} />
          <ModalInput
            type="email"
            placeholder="Email *"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <ModalInput
            $isRegistration
            type="password"
            placeholder="Пароль *"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <Button
            label="Регистрация"
            onClick={async () => {
              await store.registration(name, email, password);
              if (store.isAuth) {
                onClose();
                mainDirect();
              }
            }}
          />
          <ModalButton $isRegistration onClick={() => setIsRegistration(false)}>
            Уже есть учетная запись?
          </ModalButton>
        </>
      ) : (
        <>
          <ModalAccess src={accessIco} alt="access" />
          <ModalTitle>Вход</ModalTitle>
          <ModalInput
            type="email"
            placeholder="Email *"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <ModalInput
            type="password"
            placeholder="Пароль *"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <Button
            label="Вход"
            onClick={async () => {
              await store.login(email, password);
              if (store.isAuth) {
                onClose();
                mainDirect();
              }
            }}
          />
          <ModalButton onClick={() => setIsRegistration(true)}>Нет учетной записи?</ModalButton>
        </>
      )}
    </Modal>
  );
};

const ModalAccess = styled.img<{
  $isRegistration?: boolean;
}>`
  margin: ${({ $isRegistration }) => ($isRegistration ? '20px 0 10px' : '30px 0 20px')};
`;

const ModalTitle = styled.h4<{
  $isRegistration?: boolean;
}>`
  margin-bottom: ${({ $isRegistration }) => ($isRegistration ? '30px' : '65px')};
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const ModalInput = styled.input<{
  $isRegistration?: boolean;
}>`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: var(--main-background);
  border: 1px solid var(--primary);
  border-radius: 10px;
  font-size: 24px;
  color: var(--prime-light);
  outline: none;

  &::placeholder {
    color: var(--primary-light);
  }

  &[type='password'] {
    margin-bottom: ${({ $isRegistration }) => ($isRegistration ? '40px' : '60px')};
  }

  &:focus,
  &:active {
    border: 1px solid var(--btn-primary-hover);
  }

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 18px 20px;
  }
`;

const ModalButton = styled.p<{
  $isRegistration?: boolean;
}>`
  padding-bottom: 5px;
  margin: ${({ $isRegistration }) => ($isRegistration ? '20px 0 34px' : '40px 0 65px')};
  font-size: 18px;
  border-bottom: 1px solid var(--primary-light);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export default ModalAuthorization;
