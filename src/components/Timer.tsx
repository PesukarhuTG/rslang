import React from 'react';
import styled from 'styled-components';

interface Props {
  timerCounter?: number;
}

const Timer: React.FC<Props> = ({ timerCounter = 60 }) => {
  return (
    <TimeInfo>
      time: <TimeCounter>{timerCounter}</TimeCounter> sec
    </TimeInfo>
  );
};

const TimeInfo = styled.p`
  max-width: 210px;
  width: 100%;
  font-size: 36px;
`;

const TimeCounter = styled.span`
  display: inline-block;
  font-weight: 700;
`;

export default Timer;
