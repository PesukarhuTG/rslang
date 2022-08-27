import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemoryCard from '../types/Card';
import getData from '../utils/getData';
import FlashCard from './Card';

interface CardAlbumProps {
  group?: string;
  aPage?: string;
}

const CardAlbum: React.FC<CardAlbumProps> = ({ group = '1', aPage = '1' }) => {
  const [albumPage, setAlbumPage] = useState([]);
  useEffect(() => {
    getData('words', [setAlbumPage], { group: `${group}`, page: `${aPage}` });
  }, [group, aPage]);

  return (
    <Album>
      {(albumPage as MemoryCard[]).map(word => (
        <FlashCard word={word} key={word.id} />
      ))}
    </Album>
  );
};
const Album = styled.div`
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export default CardAlbum;
