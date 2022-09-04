import React from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'primary' | 'wrong' | 'bordered';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  type?: ButtonType;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, disabled = false, type = 'primary', onClick = () => {} }) => {
  return (
    <StyledButton disabled={disabled} $type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $type: ButtonType;
}>`
  display: block;
  padding: 0 40px;
  height: 60px;
  font-size: 24px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--btn-font-hover);
  }

  @media (max-width: 500px) {
    font-size: 20px;
    padding: 0 20px;
  }

  ${({ $type }) => {
    if ($type === 'primary')
      return css`
        background: var(--btn-primary);
        &:hover {
          background: var(--btn-primary-hover);
        }
      `;

    if ($type === 'wrong')
      return css`
        background: var(--answer-wrong);
        &:hover {
          background: var(--btn-wrong-hover);
        }
      `;

    if ($type === 'bordered')
      return css`
        background: var(--btn-dark);
        border: 1px solid var(--primary-light);
        &:hover {
          background: var(--btn-dark-hover);
        }
      `;
  }}
`;

export default Button;
