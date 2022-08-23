import React from 'react';
import styled from 'styled-components';
import soundico from '../assets/svg/sound-icon.svg';

interface ICard {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

const card: ICard = {
  id: '5e9f5ee35eb9e72bc21af733',
  group: 1,
  page: 2,
  word: 'weapon',
  image: 'files/03_0660.jpg',
  audio: 'files/03_0660.mp3',
  audioMeaning: 'files/03_0660_meaning.mp3',
  audioExample: 'files/03_0660_example.mp3',
  textMeaning: 'A <i>weapon</i> is an object used to hurt people.',
  textExample: 'Swords have been used as <b>weapons</b> for thousands of years.',
  transcription: '[wépən]',
  textExampleTranslate: 'Мечи использовались в качестве оружия на протяжении тысячелетий',
  textMeaningTranslate: 'Оружие - это объект, используемый для причинения вреда людям',
  wordTranslate: 'оружие',
};

const FlashCard = () => {
  return (
    <Card>
      <CardImage src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" alt="картинка" />
      <CardBody>
        <WordDeclaration>
          <WordTranscription>
            {card.word} {card.transcription}
          </WordTranscription>
          <SoundIco></SoundIco>
        </WordDeclaration>
        <WordTranslate>{card.wordTranslate}</WordTranslate>
      </CardBody>
      <CardMeaning>
        <p>{card.textMeaning}</p>
        <p>{card.textMeaningTranslate}</p>
      </CardMeaning>
    </Card>
  );
};

const Card = styled.div`
  max-width: 440px;
  width: 100%;
  max-height: 690px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const CardImage = styled.img`
  border-radius: 10px 10px;
  width: 100%;
  height: 350px;
`;
const CardBody = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--card-background);
  flex-direction: column;
  justify-content: space-evenly;
  height: 130px;
  padding 0 25px 0 20px;
  border-bottom 1px solid var(--primary);
`;
const WordDeclaration = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WordTranscription = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: var(--primary);
`;

const SoundIco = styled.div`
  background: url(${soundico}) no-repeat;
  width: 40px;
  height: 40px;
`;

const WordTranslate = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: var(--primary-light);
`;

const CardMeaning = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding 0 25px 0 20px;
  background-color: var(--card-background);
  border-radius: 0 0 10px 10px;
`;

export default FlashCard;
