import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Hero, Subtitle, Select, Button, AudioGame } from '../components';
import audioImg from '../assets/svg/hero-audio-logo.svg';

const options = [
  { value: '0', label: 'A1 - Beginner' },
  { value: '1', label: 'A2 - Elementary' },
  { value: '2', label: 'B1 - Intermediate' },
  { value: '3', label: 'B2 - Upper Intermediate' },
  { value: '4', label: 'C1 - Advanced' },
  { value: '5', label: 'C2 - Proficiency' },
];

const AudioPage = () => {
  const [isGame, setISGame] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(0);
  if (isGame)
    return (
      <Layout disableFooter={true}>
        <AudioGame level={level} gameEnd={() => setISGame(false)} />
      </Layout>
    );
  return (
    <Layout disableFooter={true}>
      <Hero
        image={audioImg}
        content={
          <>
            <Hero.Title>
              <strong>Мини-игра «Aудиовызов»</strong>
            </Hero.Title>
            <Hero.Description>
              «Аудиовызов» - игра на понимание устной речи. Во время игры вам предлагается прослушать предложенное слово
              и выбрать правильный перевод на русском языке
            </Hero.Description>
          </>
        }
      />
      <GameSettings>
        <Subtitle content="Выберите уровень" />
        <Select options={options} onChange={value => setLevel(+value)} />
        <Button label={'Начать'} onClick={() => setISGame(true)} />
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

export default AudioPage;
