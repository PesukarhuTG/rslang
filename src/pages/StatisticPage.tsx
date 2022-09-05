import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Button, Modal } from '../components';
import { ModalAuthorization } from '../components';

const StatisticPage = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  return (
    <Layout>
      <Wrapper>
        <Button label={'Моя статистика'} onClick={() => setVisible(!visible)} />
      </Wrapper>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <ModalTitle>Просмотр статистики</ModalTitle>
        <ModalContent>
          <p>К сожалению, при гостевом доступе просмотр статистики не доступен</p>
        </ModalContent>
        <ButtonGroup>
          <Button label={'Главная'} onClick={() => navigate('/', { replace: true })} />
          <Button label={'Регистрация'} onClick={() => setIsVisibleModal(true)} />
        </ButtonGroup>
      </Modal>
      <ModalAuthorization visible={isVisibleModal} onClose={() => setIsVisibleModal(false)} />
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const ModalTitle = styled.p`
  padding: 40px 0;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;

const ModalContent = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
`;

export default StatisticPage;
