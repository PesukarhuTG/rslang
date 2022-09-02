import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import Score from './ScoreCounter';
import Button from './Button';
import Stars from './Stars';
import SprintWords from './SprintWords';
import MemoryCard from '../types/Card';
import { ejectByID, generateSptintWord, getSeveralPageData } from '../utils';
import Modal from './Modal';
import Spin from './Spinner';
import ModalStatistic from './ModalStatistic';

type Word = {
  id: string;
  word: string;
  wordTranslate: string;
  correct: boolean;
};
interface SprintGameProps {
  level?: number;
  page?: number;
  gameEnd?: () => void;
}

const SprintGame: React.FC<SprintGameProps> = ({ level = 0, page = null, gameEnd = () => {} }) => {
  // score - количество баллов после игры
  //correct - массив с словами, на которые пользователь дал правильный ответ
  //wrong - массив с словами, на которые пользователь дал не правильный ответ

  const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<MemoryCard[]>([]);
  const [wrong, setWrong] = useState<MemoryCard[]>([]);

  const [words, setWords] = useState<MemoryCard[]>([]);
  const [currentWord, setCurrentWord] = useState<Word>({
    id: '',
    word: '',
    wordTranslate: '',
    correct: true,
  });
  const [currentPage, setCurrentPage] = useState<number | null>(page);

  const [multiplier, setMultiplier] = useState<number>(1);
  const [timer, setTimer] = useState<number>(0);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [round, setRound] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setCurrentPage(page);
    setLoading(loading);
  }, [loading, page]);

  useEffect(() => {
    getSeveralPageData(level, currentPage).then(data => {
      const defaultWord = generateSptintWord(data);
      setIsModal(false);
      setWords(data);
      setCurrentWord(defaultWord);
      setLoading(false);
    });
  }, [level, currentPage, round]);

  useEffect(() => {
    if (loading) return;
    setTimer(Date.now() + 31000);
  }, [loading]);

  const userPressHandle = (event: KeyboardEvent) => {
    const { key } = event;
    event.preventDefault();
    if (key === 'ArrowLeft') sprintClick(true);
    if (key === 'ArrowRight') sprintClick(false);
  };

  useEffect(() => {
    if (timer) {
      window.addEventListener('keyup', userPressHandle, { once: true });
    }
    return () => window.removeEventListener('keyup', userPressHandle);
  });

  if (loading) return <Spin />;

  const sprintClick = (state: boolean) => {
    if (timer) {
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
        if (!currentPage) {
          setTimer(Date.now() + 5);
        } else {
          setCurrentPage(prev => (prev as number) - 1);
        }
      }
    }
  };

  const gameOver = () => {
    setTimer(0);
    setIsModal(true);
  };

  const modalClose = () => {
    setIsModal(false);
    gameEnd();
  };

  const gameRestart = () => {
    setRound(prev => prev + 1);
    setLoading(true);
    setCorrect([]);
    setWrong([]);
    setScore(0);
  };
  return (
    <GameContainer>
      <GameStatus>
        <Stars count={multiplier} />
        <StatusCounters>
          <Timer onFinish={gameOver} timeInMs={timer} />
          <Score score={score} />
        </StatusCounters>
      </GameStatus>

      <SprintWords word={currentWord.word} translate={currentWord.wordTranslate} />

      <GameButtons>
        <Button label="Верно" onClick={() => sprintClick(true)} />
        <Button label="Неверно" type="wrong" onClick={() => sprintClick(false)} />
      </GameButtons>
      <Modal visible={isModal} onClose={modalClose}>
        <ModalStatistic correct={correct} wrong={wrong} score={score} onButtonClick={gameRestart} />
      </Modal>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  max-width: 735px;
  width: 100%;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
