import React from 'react';
import { Layout, Hero, Advantages, Select, Button } from '../components';
import mainImg from '../assets/svg/hero-main-logo.svg';
import styled from 'styled-components';

const options = [
  { value: 'A1', label: 'A1 - Beginner' },
  { value: 'A2', label: 'A2 - Elementary' },
  { value: 'B1', label: 'B1 - Intermediate' },
  { value: 'B2', label: 'B2 - Upper Intermediate' },
  { value: 'C1', label: 'C1 - Advanced' },
  { value: 'C2', label: 'C2 - Proficiency' },
];

const MainPage = () => {
  return (
    <Layout>
      <Hero
        image={mainImg}
        content={
          <>
            <Hero.Title>
              <strong>Бесплатное</strong> обучение английскому языку
            </Hero.Title>
          </>
        }
      />
      <Advantages />
      <h2>Выберите уровень</h2>
      <ChooseLevelWrapper>
        <Select options={options} onChange={value => console.log(value)} />
        <GameButtons>
          <Button label="Спринт" />
          <Button label="Аудиовызов" />
        </GameButtons>
      </ChooseLevelWrapper>
    </Layout>
  );
};

const ChooseLevelWrapper = styled.div`
  display: grid;
  grid-template-columns: 530px 1fr;
`;

const GameButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export default MainPage;