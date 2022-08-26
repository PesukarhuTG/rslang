import React from 'react';
import styled from 'styled-components';

interface SubtitleProps {
  content: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ content }) => {
  return <Headling>{content}</Headling>;
};

const Headling = styled.h3`
  font-size: 36px;
  font-weight: 700;
`;

export default Subtitle;
