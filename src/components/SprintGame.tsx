import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Score from './ScoreCounter';
import Button from './Button';
import Stars from './Stars';
import SprintWords from './SprintWords';
import MemoryCard from '../types/Card';
import { ejectByID, generateSptintWord, getSeveralPageData } from '../utils';
import { Spin } from 'antd';

type Word = {
  id: string;
  word: string;
  wordTranslate: string;
  correct: boolean;
};
interface SprintGameProps {
  group?: number;
}

const SprintGame: React.FC<SprintGameProps> = ({ group = 0 }) => {
  const [words, setWords] = useState<MemoryCard[]>([]);

  const [currentWord, setCurrentWord] = useState<Word>({
    id: '',
    word: '',
    wordTranslate: '',
    correct: true,
  });

  const [multiplier, setMultiplier] = useState(1);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState<MemoryCard[]>([]);
  const [wrong, setWrong] = useState<MemoryCard[]>([]);
  const [isGame, setIsGame] = useState(true);

  useEffect(() => {
    getSeveralPageData(group, { start: 0, end: 0 }).then(data => {
      const defaultWord = generateSptintWord(data);
      setWords(data);
      setCurrentWord(defaultWord);
    });
  }, [group]);

  if (!words.length) return <Spin />;

  const sprintClick = (state: boolean) => {
    if (isGame) {
      const [ejectedWord, newWords] = ejectByID(currentWord.id, words);

      if (currentWord.correct === state) {
        if (multiplier < 3) setMultiplier(multiplier + 1);
        setScore(prev => prev + 10 * multiplier);
        setCorrect(prev => prev.concat(ejectedWord));
      } else {
        setMultiplier(1);
        setWrong(prev => prev.concat(ejectedWord));
      }

      if (newWords.length) {
        const generatedWord = generateSptintWord(newWords);
        setWords(newWords);
        setCurrentWord(generatedWord);
      } else {
        gameOver();
      }
    }
  };

  const gameOver = () => {
    setIsGame(false);
    console.log('correct', correct);
    console.log('wrong', wrong);
  };

  return (
    <GameContainer>
      <GameStatus>
        <Stars count={multiplier} />

        <StatusCounters>
          <Timer onFinish={gameOver} />
          <Score score={score} />
        </StatusCounters>
      </GameStatus>

      <SprintWords word={currentWord.word} translate={currentWord.wordTranslate} />

      <GameButtons>
        <Button label="Верно" onClick={() => sprintClick(true)} />
        <Button label="Неверно" type="wrong" onClick={() => sprintClick(false)} />
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
