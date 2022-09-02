import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MemoryCard from '../types/responses/Card';
import getData from '../utils/getData';
import Card from './Card';

interface CardAlbumProps {
  group?: number;
  page?: number;
  level?: number;
}

const CardAlbum: React.FC<CardAlbumProps> = ({ group = 1, page = 1, level = 0 }) => {
  const [albumPage, setAlbumPage] = useState<MemoryCard[]>([]);
  useEffect(() => {
    getData('words', { group, page }).then(data => setAlbumPage(data));
  }, [group, page]);

  return (
    <Album>
      {albumPage.map(word => (
        <Card word={word} key={word.id} level={level} />
      ))}
    </Album>
  );
};

const Album = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 40px 20px;
  margin-bottom: 50px;

  @media (max-width: 1490px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

export default CardAlbum;
