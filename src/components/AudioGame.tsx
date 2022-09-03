import React from 'react';
import styled from 'styled-components';
import { MemoryCard } from '../types/responses';
import AudioDisplay from './AudioDisplay';
import Button from './Button';

interface AudioGameProps {
  data: MemoryCard;
  isAnswer: boolean;
  onClick: () => void;
}

const AudioGame: React.FC<AudioGameProps> = ({ data, isAnswer, onClick = () => {} }) => {
  return (
    <GameContainer>
      <GameQuestions>
        <AudioDisplay data={data} isAnswer={isAnswer} />
      </GameQuestions>
      <GameAnswers>
        <Button label="Книга" type="bordered" onClick={onClick} />
        <Button label="Вечер" type="bordered" />
        <Button label="Завтрак" type="bordered" />
        <Button label="Собрание" type="bordered" />
      </GameAnswers>
      <Button label="Дальше" type="bordered" />
    </GameContainer>
  );
};
const GameContainer = styled.div`
  width: 100%;
  height: 75vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const GameQuestions = styled.div`
  width: 30%;
`;

const GameAnswers = styled.div`
  gap: 40px;
  display: flex;
  justify-content: space-between;
`;

export default AudioGame;
