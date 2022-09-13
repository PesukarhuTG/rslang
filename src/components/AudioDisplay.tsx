import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
  gap: 20px;
  width: 100%;

  @media (max-width: 460px) {
    margin-top: 10px;
  }
`;

const AudioContent = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

const WordBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const WordImage = styled.img`
  display: block;
  height: 270px;
  width: auto;

  @media (max-width: 460px) {
    height: 200px;
  }
`;

const WordDescription = styled.div`
  font-size: 30px;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 25px;
  }
`;

const WordAudio = styled.img<{
  $isAnswer: boolean;
}>`
  ${({ $isAnswer }) => {
    if (!$isAnswer) {
      return css`
        width: 100px;
        height: 100px;
      `;
    } else {
      return css`
        width: 40px;
        height: 40px;
      `;
    }
  }}

  filter: brightness(0) saturate(100%) invert(100%) sepia(98%) saturate(9%) hue-rotate(166deg) brightness(101%)
    contrast(101%);

  &:hover {
    cursor: pointer;
    scale: 0.95;
  }

  @media (max-width: 460px) {
    margin: 0 5px;
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
  max-height: 350px;
  padding-top: 66%;
`;
const IconHightPerformer = styled.div`
  width: 1px;
  padding-top: calc(66% + 55px + 10px);
`;

export default AudioDisplay;
