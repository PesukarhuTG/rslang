import MemoryCard from '../types/Card';
import getData from './getData';

const getSeveralPageData = async (group: number, page?: number | null) => {
  if (typeof page === 'number') return await getData('words', { group, page });
  const PAGES_IN_GAME: number = 5;
  const TOTAL_PAGES: number = 30;
  const shufflePages: number[] = [];
  while (shufflePages.length < PAGES_IN_GAME) {
    const pageIndex = Math.floor(TOTAL_PAGES * Math.random());
    if (!shufflePages.includes(pageIndex)) shufflePages.push(pageIndex);
  }

  const result: MemoryCard[] = [];

  for await (let page of shufflePages) {
    let response = await getData('words', { group, page });
    result.push(response);
  }

  return result.flat();
};

export default getSeveralPageData;
