import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Score from './ScoreCounter';
import Button from './Button';
import Stars from './Stars';
import SprintWords from './SprintWords';
import MemoryCard from '../types/Card';
import { generateSptintWord, getSeveralPageData } from '../utils';
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
  const [correct, setCorrect] = useState<MemoryCard[]>([]);
  const [wrong, setWrong] = useState<MemoryCard[]>([]);
  const [currentWord, setCurrentWord] = useState<Word>({
    id: '',
    word: '',
    wordTranslate: '',
    correct: true,
  });
  const [score, setScore] = useState(0);
  const [isGame, setIsGame] = useState(true);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    getSeveralPageData(group, { start: 0, end: 5 }).then(data => {
      setWords(data);
      const defaultWord = generateSptintWord(data);
      setCurrentWord(defaultWord);
    });
  }, [group]);

  if (!words.length) return <Spin />;

  const wordsManager = (word: Word, isCorrect: boolean): void => {
    const answer = words.find(elem => elem.id === word.id);
    if (answer) {
      if (isCorrect) {
        const buff = [...correct];
        buff.push(answer);
        setCorrect(buff);
      } else {
        const buff = [...wrong];
        buff.push(answer);
        setWrong(buff);
      }
    }
    const newWords = words.filter(elem => elem.id !== currentWord.id);
    if (!newWords.length) gameOver();
    setWords(newWords);
  };

  const sprintClick = (state: boolean) => {
    if (isGame) {
      if (currentWord.correct === state) {
        if (multiplier < 3) setMultiplier(multiplier + 1);
        setScore(score + 10 * multiplier);
        wordsManager(currentWord, true);
      } else setMultiplier(1);
      const generatedWord = generateSptintWord(words);
      setCurrentWord(generatedWord);
      wordsManager(currentWord, false);
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
