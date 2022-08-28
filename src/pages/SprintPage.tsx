import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, Subtitle, Select, Button } from '../components';
import sprintImg from '../assets/svg/hero-sprint-logo.svg';

const options = [
  { value: 'A1', label: 'A1 - Beginner' },
  { value: 'A2', label: 'A2 - Elementary' },
  { value: 'B1', label: 'B1 - Intermediate' },
  { value: 'B2', label: 'B2 - Upper Intermediate' },
  { value: 'C1', label: 'C1 - Advanced' },
  { value: 'C2', label: 'C2 - Proficiency' },
];

const SprintPage = () => {
  return (
    <Layout disableFooter={true}>
      <Hero
        image={sprintImg}
        content={
          <>
            <Hero.Title>
              <strong>Мини-игра «Спринт»</strong>
            </Hero.Title>
            <Hero.Description>
              «Спринт» - игра на скорость. Во время игры вам предлагается слово на английском языке и его перевод. В
              течение 30 секунд нужно угадать, верен перевод или нет
            </Hero.Description>
          </>
        }
      />
      <GameSettings>
        <Subtitle content="Выберите уровень" />
        <Select options={options} onChange={value => console.log(value)} />
        <Button label={'Начать'} />
      </GameSettings>
    </Layout>
  );
};

const GameSettings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export default SprintPage;
