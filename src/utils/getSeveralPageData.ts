import MemoryCard from '../types/Card';
import getData from './getData';

async function* generateData(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

type Rage = {
  start: number;
  end: number;
};

const getSeveralPageData = async (group: number, rage: Rage) => {
  let generator = generateData(rage.start, rage.end);
  let result: MemoryCard[] = [];

  for await (let page of generator) {
    let response = await getData('words', { group, page });
    result.push(response);
  }

  return result.flat()
};

export default getSeveralPageData;
