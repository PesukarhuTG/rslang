import React, { useState } from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import soundico from '../assets/svg/sound-icon.svg';
import MemoryCard from '../types/Card';
import { DBLink } from '../types/DataBaseTypes';

interface WordsProps {
  word: MemoryCard;
  level: number;
}

const FlashCard: React.FC<WordsProps> = ({ word, level }) => {
  const [play, setPlay] = useState<boolean>(true);
  const playAudio = () => {
    setPlay(!play);
    const audio = new Audio(`${DBLink}${word.audio}`);
    const audioMeaning = new Audio(`${DBLink}${word.audioMeaning}`);
    const audioExample = new Audio(`${DBLink}${word.audioExample}`);
    audio.play();
    audio.addEventListener('ended', () => audioMeaning.play());
    audioMeaning.addEventListener('ended', () => audioExample.play());
    audioExample.addEventListener('ended', () => setPlay(play));
  };

  return (
    <CardBody>
      <CardImage style={{ backgroundImage: `url(${DBLink}${word.image})` }} />
      <WordDeclaration>
        <Word>
          <WordTranscription $level={level + 1}>
            <div>{word.word}</div>
            <div>{word.transcription}</div>
          </WordTranscription>
          <WordAudio $level={level + 1} onClick={play ? playAudio : () => {}}></WordAudio>
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

const WordTranscription = styled.div<{
  $level: number;
}>`
  flex-basis: content;
  flex-shrink: 3;
  font-weight: 700;
  font-size: 30px;
  color: ${({ $level }) => `var(--language-level-${$level})`};
`;

const WordAudio = styled.div<{
  $level: number;
}>`
  ${({ $level }) => {
    if ($level === 1)
      return `filter: invert(0%) sepia(71%) saturate(499%) hue-rotate(26deg) brightness(88%) contrast(87%);`;

    if ($level === 2)
      return `filter: invert(0%) sepia(91%) saturate(585%) hue-rotate(16deg) brightness(107%) contrast(101%);`;

    if ($level === 3)
      return `filter: invert(1%) sepia(81%) saturate(1662%) hue-rotate(77deg) brightness(101%) contrast(92%);`;

    if ($level === 4)
      return `filter: invert(100%) sepia(100%) saturate(6757%) hue-rotate(237deg) brightness(100%) contrast(93%);`;

    if ($level === 5)
      return `filter: invert(60%) sepia(99%) saturate(636%) hue-rotate(166deg) brightness(102%) contrast(102%);`;

    if ($level === 6)
      return `filter: invert(50%) sepia(85%) saturate(6763%) hue-rotate(265deg) brightness(97%) contrast(97%);`;

    if ($level === 7)
      return `filter: invert(66%) sepia(82%) saturate(1895%) hue-rotate(309deg) brightness(99%) contrast(94%);`;
  }}
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
