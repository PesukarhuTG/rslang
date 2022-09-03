import React, { useState } from 'react';
import styled from 'styled-components';
import soundico from '../assets/svg/sound-icon.svg';
import { DB_LINK } from '../types/DataBaseTypes';
import { MemoryCard } from '../types/responses';
interface AudioDisplayProps {
  data: MemoryCard;
  isAnswer: boolean;
}
const AudioDisplay: React.FC<AudioDisplayProps> = ({ data, isAnswer = false }) => {
  const [play, setPlay] = useState<boolean>(true);

  const playAudio = () => {
    setPlay(!play);
    const audio = new Audio(`${DB_LINK}${data.audio}`);
    audio.play();
    audio.addEventListener('ended', () => setPlay(play));
  };

  if (isAnswer)
    return (
      <Wrapper>
        <AudioContent>
          <HightPerformer />
          <WordImage src={`${DB_LINK}${data.image}`} alt={data.word} />
        </AudioContent>
        <WordBody>
          <WordDescription>
            {data.word} {data.transcription}
          </WordDescription>
          <WordAudio $isAnswer={isAnswer} src={soundico} alt="svg" onClick={playAudio} />
        </WordBody>
      </Wrapper>
    );
  return (
    <WrapperIcon>
      <IconHightPerformer />
      <WordAudio $isAnswer={isAnswer} src={soundico} alt="svg" onClick={playAudio} />
    </WrapperIcon>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 390px;
  width: 100%;
`;

const AudioContent = styled.div`
  display: flex;
  align-items: stretch;
`;
const WordBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const WordImage = styled.img`
  width: 100%;
  height: 100%;
`;
const WordDescription = styled.div`
  font-size: 36px;
  line-height: 54px;
  text-align: center;
`;
const WordAudio = styled.img<{
  $isAnswer: boolean;
}>`
  ${({ $isAnswer }) => {
    if (!$isAnswer) {
      return `width: 100px;
            height: 100px;`;
    } else {
      return `width: 50px;
      height: 50px;`;
    }
  }}

  filter: brightness(0) saturate(100%) invert(100%) sepia(98%) saturate(9%) hue-rotate(166deg) brightness(101%)
    contrast(101%);

  &:hover {
    cursor: pointer;
    scale: 0.95;
  }
`;
const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const HightPerformer = styled.div`
  width: 1px;
  padding-top: 66%;
`;
const IconHightPerformer = styled.div`
  width: 1px;
  padding-top: calc(66% + 55px + 10px);
`;

export default AudioDisplay;
