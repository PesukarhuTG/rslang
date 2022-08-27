import React from 'react';
import styled from 'styled-components';
import MemoryCard from '../types/Card';
import getData from '../utils/getData';
import FlashCard from './Card';

const CardAlbum = () => {
  const mapping = (data: MemoryCard[]) => {
    data.map(word => <FlashCard word={word} />);
  };
  // return <Album>{getData('words', [mapping])}</Album>;
};
const Album = styled.div`
	margin: 0 auto;
	width:90%
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export default CardAlbum;
