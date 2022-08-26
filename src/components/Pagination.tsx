import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import styled from 'styled-components';

interface PaginationProps {
  page?: number;
  total?: number;
  onChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page = 1, onChange = () => {}, total = 1 }) => {
  return (
    <StyledPagination
      current={page}
      size="small"
      defaultCurrent={1}
      total={total}
      pageSize={1}
      onChange={onChange}
      showSizeChanger={false}
    />
  );
};

const StyledPagination = styled(AntdPagination)`
  font-size: 36px;

  .ant-pagination-item-link {
    font-size: 30px;
    color: var(--primary);

    transform: translateY(-4px);

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
      top: 7px;
      letter-spacing: 5px;
      text-indent: 0;
      font-size: 20px;
      color: var(--primary-light);
    }

    & .ant-pagination-item-link-icon {
      position: absolute;
      color: var(--primary);
      font-size: 30px;
      top: -8px;
      left: 2px;
    }
  }
`;

export default Pagination;
