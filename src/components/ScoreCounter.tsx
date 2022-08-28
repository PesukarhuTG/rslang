import React from 'react';
import styled from 'styled-components';

interface Props {
  score?: number;
}

const Score: React.FC<Props> = ({ score = 0 }) => {
  return (
    <ScoreInfo>
      score: <ScoreCounter>{score}</ScoreCounter>
    </ScoreInfo>
  );
};

const ScoreInfo = styled.p`
  max-width: 210px;
  width: 100%;
  text-align: right;
  font-size: 36px;
`;

const ScoreCounter = styled.span`
  display: inline-block;
  font-weight: 700;
`;

export default Score;
