import React, { useState } from 'react';
import styled from 'styled-components';
import { MemoryCard } from '../types/responses/index';
import soundico from '../assets/svg/sound-icon.svg';
import { DB_LINK } from '../types/DataBaseTypes';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface StatisticProps {
  gameName?: string;
  correct?: MemoryCard[];
  wrong?: MemoryCard[];
  score?: number;
  isScore?: boolean;
  onButtonClick?: () => void;
}
const ModalStatistic: React.FC<StatisticProps> = ({
  gameName = 'Спринт',
  score = 0,
  wrong = [],
  correct = [],
  isScore = true,
  onButtonClick = () => {},
}) => {
  let navigate = useNavigate();

  const mainRedirect = () => {
    navigate('/');
  };
  return (
    <>
      <Container>
        <GameStatisticHeader>Результат игры «{gameName}»</GameStatisticHeader>
        {isScore && <GameScore>Количество очков: {score}</GameScore>}
        <GameStatistic>
          <GameStatisticInner title="Ошибок: " data={wrong} isCorrect={false} />
          <GameStatisticInner title="Знаю: " data={correct} isCorrect={true} />
        </GameStatistic>
      </Container>

      <ButtonContainer>
        <Button label="Главная" onClick={mainRedirect} />
        <Button label="Играть снова" onClick={onButtonClick} />
      </ButtonContainer>
    </>
  );
};

interface GameStatisticInnerProps {
  title?: string;
  isCorrect?: boolean;
  data?: MemoryCard[];
}
const GameStatisticInner: React.FC<GameStatisticInnerProps> = ({ title, data, isCorrect = true }) => {
  return (
    <StatisticInner>
      <StatisticInnerHeader $isCorrect={isCorrect}>
        {title}
        {data && data.length}
      </StatisticInnerHeader>
      <ul>{data && data.map(elem => <StatisticResults data={elem} key={elem.id} />)}</ul>
    </StatisticInner>
  );
};

interface StatisticResultsProps {
  data: MemoryCard;
}

const StatisticResults: React.FC<StatisticResultsProps> = ({ data }) => {
  const [play, setPlay] = useState<boolean>(true);
  const playAudio = () => {
    setPlay(false);
    const audio = new Audio(`${DB_LINK}${data.audio}`);
    audio.play();
    audio.addEventListener('ended', () => setPlay(true));
  };

  if (!data) return null;

  return (
    <StatisticRow>
      <WordAudio src={soundico} alt={data.word} onClick={play ? playAudio : () => {}} />
      <Word>{data.word}</Word>-<span>{data.wordTranslate}</span>
    </StatisticRow>
  );
};

const Container = styled.div`
  width: 100%;
  padding-left: 40px;

  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const GameStatisticHeader = styled.h2`
  text-align: center;
  font-size: 36px;
  line-height: 54px;
  font-weight: 700;
`;

const GameScore = styled.p`
  text-align: center;
  line-height: 54px;
  margin-top: 10px;
`;

const GameStatistic = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StatisticInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatisticInnerHeader = styled.h3<{
  $isCorrect: boolean;
}>`
  ${({ $isCorrect }) => {
    if (!$isCorrect) return 'color: var(--answer-wrong);';
    else return 'color: var(--btn-primary);';
  }}
  font-weight: 700;
  font-size: 36px;
`;

const StatisticRow = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Word = styled.span`
  font-weight: 700;
  line-height: 54px;
`;

const WordAudio = styled.img`
  width: 30px;
  height: 30px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(98%) saturate(9%) hue-rotate(166deg) brightness(101%)
    contrast(101%);

  &:hover {
    cursor: pointer;
    scale: 0.95;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export default ModalStatistic;
