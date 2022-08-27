import React, { useState } from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import soundico from '../assets/svg/sound-icon.svg';
import MemoryCard from '../types/Card';
import { DBLink } from '../types/DataBaseTypes';

interface WordsProps {
  word: MemoryCard;
}

const FlashCard: React.FC<WordsProps> = ({ word }) => {
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
      <CardImage src={`${DBLink}${word.image}`} alt={word.word} />
      <WordDeclaration>
        <Word>
          <WordTranscription>
            {word.word} {word.transcription}
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
      <p>{parse(text)}</p>
      <p>{textTranslate}</p>
    </WordMeaning>
  );
};

const CardBody = styled.div`
  margin: 0 auto;
  min-width: 440px;
  min-height: 890px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  & > :first-child {
    border-radius: 10px 10px 0 0;
  }
  & > :last-child {
    border-radius: 0 0 10px 10px;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
const WordDeclaration = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--card-background);
  padding 0 25px 0 20px;
`;
const Word = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WordTranscription = styled.div`
  font-weight: 700;
  font-size: 36px;
  color: var(--primary);
`;

const WordAudio = styled.div`
  background: url(${soundico}) no-repeat;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
    scale: 0.95;
  }
`;

const WordTranslation = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: var(--primary-light);
`;

const WordMeaning = styled.div`
  width: 100%;
  display: flex;
  gap:10px;
  flex-direction: column;
  padding 15px 25px 25px 20px;
  background-color: var(--card-background);
  border-top 1px solid var(--primary);

  & > *{
    margin: 0px;
  }
`;

export default FlashCard;
