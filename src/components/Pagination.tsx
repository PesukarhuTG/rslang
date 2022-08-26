import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import styled from 'styled-components';

const Pagination = () => {
  return (
    <StyledPagination
      size="small"
      defaultCurrent={1}
      total={600}
      pageSize={20}
      onChange={page => console.log(page)}
      showSizeChanger={false}
    />
  );
};

const StyledPagination = styled(AntdPagination)`
  font-size: 36px;

  .ant-pagination-item-link {
    font-size: 36px;
    color: var(--primary);

    &:hover {
      color: var(--btn-primary-hover);
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    vertical-align: 0;
  }

  .ant-pagination-disabled .ant-pagination-item-link {
    opacity: 0.3;

    &:hover {
      color: var(--primary);
    }
  }

  .ant-pagination-item {
    height: 36px !important;
  }

  .ant-pagination-item a {
    color: var(--primary-light);
  }

  .ant-pagination-item-active {
    font-weight: 400;
    background: none;
    border: none;

    & a {
      color: var(--primary);
    }
  }

  .ant-pagination-item-container {
    & .ant-pagination-item-ellipsis {
      top: 12px;
      letter-spacing: 1px;
      text-indent: 0;
      font-size: 30px;
      color: var(--primary-light);
    }

    & .ant-pagination-item-link-icon {
      position: absolute;
      color: var(--primary);
      font-size: 20px;
      top: 2px;
      left: 7px;
    }
  }
`;

export default Pagination;
