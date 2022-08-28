import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemoryCard from '../types/Card';
import getData from '../utils/getData';
import Card from './Card';

interface CardAlbumProps {
  group?: number;
  page?: number;
}

const CardAlbum: React.FC<CardAlbumProps> = ({ group = 1, page = 1 }) => {
  const [albumPage, setAlbumPage] = useState<MemoryCard[]>([]);
  useEffect(() => {
    getData('words', { group, page }).then(data => setAlbumPage(data));
  }, [group, page]);

  return (
    <Album>
      {albumPage.map(word => (
        <Card word={word} key={word.id} />
      ))}
    </Album>
  );
};

const Album = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-content: space-between;
  gap: 20px;
`;
export default CardAlbum;