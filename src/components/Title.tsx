import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  content: string;
}

const Title: React.FC<TitleProps> = ({ content }) => {
  return <Headling>{content}</Headling>;
};

const Headling = styled.h3`
  font-size: 54px;
  font-weight: 700;
`;

export default Title;
