import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Button, Hero } from '../components';
import statImg from '../assets/svg/stat.svg';

const StatisticPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Hero
        image={statImg}
        content={
          <>
            <Hero.Title>
              <strong>Статистика обучения</strong>
            </Hero.Title>
            <Hero.Description>
              К сожалению, данный раздел находится в разработке и в данный момент не доступен
            </Hero.Description>
          </>
        }
      />
      <Wrapper>
        <Button label={'На главную'} onClick={() => navigate('/', { replace: true })} />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-bottom: 40px;
`;

export default StatisticPage;
