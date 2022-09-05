import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return <Headling>{content}</Headling>;
};

const Headling = styled.h3`
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 530px) {
    margin-top: 60px;
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

export default Title;
