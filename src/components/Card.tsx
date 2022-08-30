import React, { useState } from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import soundico from '../assets/svg/sound-icon.svg';
import MemoryCard from '../types/Card';
import { DB_LINK } from '../types/DataBaseTypes';

interface WordsProps {
  word: MemoryCard;
}

const FlashCard: React.FC<WordsProps> = ({ word }) => {
  const [play, setPlay] = useState<boolean>(true);
  const playAudio = () => {
    setPlay(!play);
    const audio = new Audio(`${DB_LINK}${word.audio}`);
    const audioMeaning = new Audio(`${DB_LINK}${word.audioMeaning}`);
    const audioExample = new Audio(`${DB_LINK}${word.audioExample}`);
    audio.play();
    audio.addEventListener('ended', () => audioMeaning.play());
    audioMeaning.addEventListener('ended', () => audioExample.play());
    audioExample.addEventListener('ended', () => setPlay(play));
  };

  return (
    <CardBody>
      <CardImage style={{ backgroundImage: `url(${DB_LINK}${word.image})` }} />
      <WordDeclaration>
        <Word>
          <WordTranscription>
            <div>{word.word}</div>
            <div>{word.transcription}</div>
          </WordTranscription>
          <WordAudio onClick={play ? playAudio : () => {}}></WordAudio>
        </Word>
        <WordTranslation children={word.wordTranslate} />
      </WordDeclaration>
      <WordExamples text={word.textMeaning} textTranslate={word.textMeaningTranslate} />
      <WordExamples text={word.textExample} textTranslate={word.textExampleTranslate} />
    </CardBody>
  );
};

interface WordExamplesProps {
  text: string;
  textTranslate: string;
}
const WordExamples: React.FC<WordExamplesProps> = ({ text, textTranslate }) => {
  return (
    <WordMeaning>
      <Example>{parse(text)}</Example>
      <Translate>{textTranslate}</Translate>
    </WordMeaning>
  );
};

const CardBody = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: var(--card-background);
  border-radius: 10px;
`;

const CardImage = styled.div`
  display: block;
  width: 100%;
  height: 375px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;

  @media (max-width: 1020px) {
    height: 500px;
  }
`;

const WordDeclaration = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  border-bottom: 1px solid var(--primary);
`;

const Word = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WordTranscription = styled.div`
  flex-basis: content;
  flex-shrink: 3;
  font-weight: 700;
  font-size: 30px;
  color: var(--primary);
`;

const WordAudio = styled.div`
  background: url(${soundico}) no-repeat;
  width: 40px;
  flex-basis: 45px;
  height: 40px;
  &:hover {
    cursor: pointer;
    scale: 0.95;
  }
`;

const WordTranslation = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: var(--primary-light);
`;

const WordMeaning = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding 20px;

  & > *{
    margin: 0px;
  }
`;

const Example = styled.p`
  font-size: 22px;
  line-height: 1.7;
`;

const Translate = styled.p`
  font-size: 22px;
  line-height: 1.7;
`;

export default FlashCard;
