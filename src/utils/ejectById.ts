import { MemoryCard } from '../types/responses/index';

const ejectByID = (id: string, array: MemoryCard[]): [MemoryCard, MemoryCard[]] => {
  const answer = array.find(elem => elem.id === id) as MemoryCard;
  const newWords = array.filter(elem => elem.id !== id);
  return [answer, newWords];
};
export default ejectByID;
