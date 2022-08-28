import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, Subtitle, Select, Button } from '../components';
import audioImg from '../assets/svg/hero-audio-logo.svg';

const options = [
  { value: 'A1', label: 'A1 - Beginner' },
  { value: 'A2', label: 'A2 - Elementary' },
  { value: 'B1', label: 'B1 - Intermediate' },
  { value: 'B2', label: 'B2 - Upper Intermediate' },
  { value: 'C1', label: 'C1 - Advanced' },
  { value: 'C2', label: 'C2 - Proficiency' },
];

const AudioPage = () => {
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

export default AudioPage;
