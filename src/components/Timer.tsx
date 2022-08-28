import React from 'react';
import styled from 'styled-components';
import { Statistic } from 'antd';

const { Countdown } = Statistic;

interface Props {
  timeInMs?: number;
  onFinish?: (data?: unknown) => void;
}

const time = Date.now() + 61 * 1000;

const Timer: React.FC<Props> = ({ timeInMs = time, onFinish = () => {} }) => {
  return (
    <TimeInfo>
      time:
      <StyledTimer className="timer" format="s" value={timeInMs} onFinish={onFinish} />
      sec
    </TimeInfo>
  );
};

const TimeInfo = styled.span`
  max-width: 210px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 36px;
`;

const StyledTimer = styled(Countdown)`
  .ant-statistic-content-value {
    display: inline-block;
    width: 40px;
    font-size: 36px;
    font-weight: 700;
    color: var(--primary-light);
  }
`;

export default Timer;
