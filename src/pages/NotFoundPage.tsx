import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button } from '../components';
import styled from 'styled-components';
import notFoundIcon from '../assets/svg/error-404.svg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Wrapper>
        <NotFoundImg />
        <NotFoundMessage>Ooops! Что-то пошло не так...</NotFoundMessage>
        <Button label={'На главную'} onClick={() => navigate('/', { replace: true })} />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin: auto;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const NotFoundImg = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${notFoundIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const NotFoundMessage = styled.p`
  font-size: 20px;
  margin: 30px 0;
`;

export default NotFound;
