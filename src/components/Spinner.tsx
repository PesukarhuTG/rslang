import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Spinner = () => {
  return <StyledSpin size="large" />;
};

const StyledSpin = styled(Spin)`
  display: flex;
  align-item: center;
  justify-content: center;

  span.ant-spin-dot {
    font-size: 70px;
  }

  .ant-spin-dot-item {
    background-color: var(--primary);
  }

  .ant-spin-dot-item {
    width: 26px !important;
    height: 26px !important;
  }
`;

export default Spinner;
