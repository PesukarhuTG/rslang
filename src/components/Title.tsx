import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return <Headling>{content}</Headling>;
};

const Headling = styled.h3`
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 54px;
  font-weight: 700;
`;

export default Title;
