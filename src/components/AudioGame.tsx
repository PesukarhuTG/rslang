import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MemoryCard } from '../types/responses';
import { arrayShuffle, createAudio, getSeveralPageData, getTranslaties } from '../utils';
import AudioDisplay from './AudioDisplay';
import Button from './Button';
import Modal from './Modal';
import ModalStatistic from './ModalStatistic';
import Spinner from './Spinner';

interface AudioGameProps {
  level?: number;
  page?: number;
  gameEnd?: () => void;
}

const AudioGame: React.FC<AudioGameProps> = ({ level = 0, page = null, gameEnd = () => {} }) => {
  const [newRound, setNewRound] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [words, setWords] = useState<MemoryCard[]>([]);
  const [currentWords, setCurrentWords] = useState<MemoryCard[]>([]);
  const [translateArr, setTranslateArr] = useState<number[]>([]);
  const [type, setType] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [isAnswer, setIsAnswer] = useState(false);
  const [correct, setCorrect] = useState<MemoryCard[]>([]);
  const [wrong, setWrong] = useState<MemoryCard[]>([]);
  const [isPage, setIsPage] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<MemoryCard>({
    id: '',
    group: 0,
    page: 0,
    word: '',
    image: '',
    audio: '',
    audioMeaning: '',
    audioExample: '',
    textMeaning: '',
    textExample: '',
    transcription: '',
    textExampleTranslate: '',
    textMeaningTranslate: '',
    wordTranslate: '',
  });

  useEffect(() => {
    setIsPage(false);
    const currPage = typeof page === 'number' ? page : new Date().getSeconds() % 30;
    setNewRound(false);
    setLoading(true);
    setCurrentPage(currPage);
    setIsPage(true);
    console.log(currPage);
  }, [newRound, page]);

  useEffect(() => {
    if (typeof currentPage !== 'number') return;
    if (!isPage) return;

    getSeveralPageData(level, currentPage).then((data: MemoryCard[]) => {
      setWords(data);
      setCurrentWords(arrayShuffle(data));
      setIsPage(false);
    });
  }, [level, currentPage, isPage]);

  useEffect(() => {
    if (!currentWords.length) return;
    setLoading(true);
    const ejectedWord = currentWords.pop();
    if (ejectedWord) {
      const translaties = getTranslaties(ejectedWord.id, words);
      setCurrentWord(ejectedWord);
      setTranslateArr(translaties);
      setLoading(false);
    }
  }, [currentWords, round, words]);

  useEffect(() => {
    if (loading) return;
    if (!currentWord.audio) return;
    const audio = createAudio(currentWord.audio);
    audio.play();
    setLoading(true);
  }, [loading, currentWord.audio]);

  const AnswerClick = (index: number) => {
    setIsAnswer(true);
    if (words[translateArr[index - 1]].wordTranslate === currentWord.wordTranslate) {
      setType(index);
      setCorrect(prev => prev.concat(currentWord));
    } else {
      setType(-index);
      setWrong(prev => prev.concat(currentWord));
    }
  };

  const nextRound = () => {
    if (!isAnswer) {
      setWrong(prev => prev.concat(currentWord));
    }
    setRound(prev => prev + 1);
    setIsAnswer(false);
    setType(0);
  };

  const modalClose = () => {
    setRound(0);
    gameEnd();
  };
  const gameRestart = () => {
    setNewRound(true);
    setRound(0);
    setTranslateArr([]);
    setCurrentWords([]);
    setCorrect([]);
    setWrong([]);
  };
  if (!translateArr.length) return <Spinner></Spinner>;
  return (
    <GameContainer>
      <GameQuestions>
        <AudioDisplay data={currentWord} isAnswer={isAnswer} />
      </GameQuestions>

      <GameAnswers>
        <Button
          label={words[translateArr[0]].wordTranslate}
          type={type === 1 ? 'primary' : type === -1 ? 'wrong' : 'bordered'}
          onClick={() => AnswerClick(1)}
          disabled={type === 0 ? false : true}
        />
        <Button
          label={words[translateArr[1]].wordTranslate}
          type={type === 2 ? 'primary' : type === -2 ? 'wrong' : 'bordered'}
          onClick={() => AnswerClick(2)}
          disabled={type === 0 ? false : true}
        />
        <Button
          label={words[translateArr[2]].wordTranslate}
          type={type === 3 ? 'primary' : type === -3 ? 'wrong' : 'bordered'}
          onClick={() => AnswerClick(3)}
          disabled={type === 0 ? false : true}
        />
        <Button
          label={words[translateArr[3]].wordTranslate}
          type={type === 4 ? 'primary' : type === -4 ? 'wrong' : 'bordered'}
          onClick={() => AnswerClick(4)}
          disabled={type === 0 ? false : true}
        />
      </GameAnswers>
      <Button label="Дальше" type="bordered" onClick={nextRound} />
      <Modal
        visible={round < 20 ? false : true}
        onClose={modalClose}
        children={
          <ModalStatistic
            gameName="Аудиовызов"
            correct={correct}
            wrong={wrong}
            isScore={false}
            onButtonClick={gameRestart}
          />
        }
      />
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
