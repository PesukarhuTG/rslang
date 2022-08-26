import React, { useState } from 'react';
import styled from 'styled-components';
import soundico from '../assets/svg/sound-icon.svg';
import { DBLink } from '../types/DataBaseLink';

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

interface WordsProps {
  word: ICard;
}

const FlashCard: React.FC<WordsProps> = ({ word }) => {
  const [play, setPlay] = useState(true);
  const playAudio = () => {
    setPlay(!play);
    const audio = new Audio(`${DBLink + word.audio}`);
    const audioMeaning = new Audio(`${DBLink + word.audioMeaning}`);
    const audioExample = new Audio(`${DBLink + word.audioExample}`);
    audio.play();
    audio.addEventListener('ended', () => audioMeaning.play());
    audioMeaning.addEventListener('ended', () => audioExample.play());
    audioExample.addEventListener('ended', () => setPlay(play));
  };
  return (
    <Card>
      <CardImage src={`${DBLink + word.image}`} alt={word.word} />
      <CardBody>
        <WordDeclaration>
          <WordTranscription>
            {word.word} {word.transcription}
          </WordTranscription>
          <SoundIco onClick={play ? playAudio : () => {}}></SoundIco>
        </WordDeclaration>
        <WordTranslate children={word.wordTranslate} />
      </CardBody>
      <CardMeaning>
        <p children={word.textMeaning} />
        <p>{word.textMeaningTranslate}</p>
      </CardMeaning>
      <WordMeaning word={word.word} meaning={word.textMeaning} />
    </Card>
  );
};

interface WordMeaningProps {
  word: string;
  meaning: string;
}
const WordMeaning: React.FC<WordMeaningProps> = ({ word, meaning }) => {
  const meaningArr: string[] = meaning.split(' ');
  const tagfinder = meaningArr.map(elem =>
    elem.includes(`>${word}<`) ? React.createElement('i', { children: elem }) : elem
  );
  return <>{tagfinder.join(' ')}</>;
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
  &:hover {
    cursor: pointer;
    scale: 0.95;
  }
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
