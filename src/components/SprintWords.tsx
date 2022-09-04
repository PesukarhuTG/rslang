import React from 'react';
import styled from 'styled-components';

interface Props {
  word?: string;
  translate?: string;
}

const SprintWords: React.FC<Props> = ({ word = 'boat', translate = 'лодка' }) => {
  return (
    <WordWrapper>
      <EnglishWord>{word}</EnglishWord>
      <Translate>{translate}</Translate>
    </WordWrapper>
  );
};

const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 35px 0 45px;
`;

const EnglishWord = styled.p`
  font-size: 80px;
  font-weight: 700;
  text-align: center;
  line-height: 1.1;
  color: var(--primary);

  @media (max-width: 600px) {
    font-size: 50px;
  }

  @media (max-width: 420px) {
    font-size: 40px;
  }
`;

const Translate = styled.p`
  font-size: 60px;
  text-align: center;
  line-height: 1.1;
  color: var(--primary-light);

  @media (max-width: 600px) {
    font-size: 38px;
  }

  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

export default SprintWords;
