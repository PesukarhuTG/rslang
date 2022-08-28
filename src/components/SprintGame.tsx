import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Score from './ScoreCounter';
import Button from './Button';
import SprintWords from './SprintWords';
import starRight from '../assets/svg/star-right.svg';
import starWrong from '../assets/svg/star-wrong.svg';

const SprintGame = () => {
  return (
    <GameContainer>
      <GameStatus className="GameStatus">
        <StatusStars className="StatusStars">
          <StarItemRight />
          <StarItemRight />
          <StarItemWrong />
        </StatusStars>
        <StatusCounters className="StatusCounters">
          <Timer />
          <Score />
        </StatusCounters>
      </GameStatus>

      <SprintWords />

      <GameButtons>
        <Button label="Верно" />
        <Button label="Неверно" type="wrong" />
      </GameButtons>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  max-width: 735px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const GameStatus = styled.div`
  max-width: 735px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StatusStars = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

const StarItemRight = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  background: url(${starRight}) no-repeat;
`;

const StarItemWrong = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  background: url(${starWrong}) no-repeat;
`;

const StatusCounters = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GameButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export default SprintGame;
