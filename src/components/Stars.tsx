import React from 'react';
import styled from 'styled-components';
import { Rate as StarsRate } from 'antd';

type Props = {
  count?: number;
  lifeCount?: number;
};

/* если назначим условие, что только 3 ошибки допустимы, то изначально ставим 3
зеленые звезды (count), если ошибка - уменьшаем кол-во окрашенных в зеленый (lifeCount).
Потом можно добавить проверку, если lifeCount = 0, то игра провалена*/

const Stars: React.FC<Props> = ({ count = 3, lifeCount = 3 }) => {
  return (
    <StatusStars>
      <StyledStars count={count} defaultValue={lifeCount} disabled />
    </StatusStars>
  );
};

const StyledStars = styled(StarsRate)`
  .anticon svg {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }

  .ant-rate-star-zero svg {
    fill: var(--answer-wrong);
  }

  .ant-rate-star-full svg {
    fill: var(--primary);
  }
`;

const StatusStars = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

export default Stars;
