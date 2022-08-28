import React from 'react';
import styled from 'styled-components';
import { Rate as StarsRate } from 'antd';

type Props = {
  count?: number;
};

/* если назначим условие, что только 3 ошибки допустимы, то изначально ставим 3
зеленые звезды (count), если ошибка - уменьшаем кол-во окрашенных в зеленый (defaultValue).
Потом можно добавить проверку, если defaultValue = 0, то игра провалена*/

const Stars: React.FC<Props> = ({ count = 3 }) => {
  return (
    <StatusStars>
      <StyledStars defaultValue={2} count={count} disabled />
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
