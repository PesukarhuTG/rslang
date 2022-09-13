import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Hero, Subtitle, Select, Button, SprintGame } from '../components';
import sprintImg from '../assets/svg/hero-sprint-logo.svg';

const options = [
  { value: '0', label: 'A1 - Beginner' },
  { value: '1', label: 'A2 - Elementary' },
  { value: '2', label: 'B1 - Intermediate' },
  { value: '3', label: 'B2 - Upper Intermediate' },
  { value: '4', label: 'C1 - Advanced' },
  { value: '5', label: 'C2 - Proficiency' },
];

const SprintPage = () => {
  const [isGame, setISGame] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(0);

  if (isGame)
    return (
      <Layout disableFooter={true}>
        <SprintGame level={level} gameEnd={() => setISGame(false)} />
      </Layout>
    );
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
        <Select options={options} onChange={value => setLevel(+value)} />
        <Button label="Начать" onClick={() => setISGame(true)} />
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
