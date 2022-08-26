import React from 'react';
import styled from 'styled-components';
import { Select as AntdSelect } from 'antd';

export type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({ options, onChange = () => {}, disabled = false }) => {
  return (
    <StyledSelect
      defaultValue={options[0]}
      options={options}
      size="large"
      disabled={disabled}
      onChange={(value: unknown) => onChange(value as string)}
      dropdownRender={menu => <SelectDropdown>{menu}</SelectDropdown>}
      dropdownStyle={{
        borderRadius: '10px',
        backgroundColor: 'var(--primary-dark)',
      }}
    />
  );
};

const StyledSelect = styled(AntdSelect)`
  height: 60px;

  & * {
    color: var(--primary-light);
  }

  &:not(.ant-select-customize-input) .ant-select-selector {
    padding: 1px 20px !important;
    height: 60px !important;
    background-color: var(--primary-dark);
    border-radius: 10px;
    font-size: 20px;

    .ant-select-selection-search-input {
      height: 58px;
    }

    .ant-select-selection-item {
      line-height: 60px !important;
      padding-right: 40px !important;
    }
  }

  .ant-select-arrow .anticon {
    font-size: 20px;
  }
`;

const SelectDropdown = styled.div`
  border-radius: 10px;
  overflow: hidden;

  & * {
    color: var(--primary-light);
    font-size: 20px;
  }

  .ant-select-item-option-active,
  .ant-select-item-option:hover {
    background-color: var(--main-background);
  }

  .ant-select-item-option-selected {
    background-color: var(--primary);
  }
`;

export default Select;