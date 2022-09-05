import { MemoryCard } from '../types/responses';

const arrayShuffle = <T extends Array<number | MemoryCard>>(array: T) => {
  const sortedArr = [...array];
  for (let i = sortedArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
  }

  return sortedArr;
};

export default arrayShuffle;
