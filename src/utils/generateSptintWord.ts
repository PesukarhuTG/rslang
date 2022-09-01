import MemoryCard from '../types/Card';

const generateSptintWord = (wordsArray: MemoryCard[]) => {
  const CORRECT_RATE = 0.5;
  const arrLength = wordsArray.length;
  const index = Math.floor(arrLength * Math.random());

  const word = {
    id: wordsArray[index].id,
    word: wordsArray[index].word,
    wordTranslate: wordsArray[index].wordTranslate,
    correct: true,
  };
  if (wordsArray.length === 1) return word;
  if (Math.random() < CORRECT_RATE) {
    const shift = Math.floor((wordsArray.length - 1) * Math.random() + 1);
    const newIndex = (index + shift) % arrLength;
    word.wordTranslate = wordsArray[newIndex].wordTranslate;
    word.correct = false;
  }

  return word;
};
export default generateSptintWord;
