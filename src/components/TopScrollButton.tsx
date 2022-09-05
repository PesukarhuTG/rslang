import React from 'react';
import styled from 'styled-components';
import arrowUpIcon from '../assets/svg/arrow-top.svg';

const TopScrollButton = () => {
  const onScroll = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return <TopButton className="top-btn" onClick={onScroll} />;
};

const TopButton = styled.button`
  display: none;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 0;
  border-radius: 30px;
  background-image: url(${arrowUpIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--btn-primary);
  transition: 0.3s;
  box-shadow: 0 0 6px 2px var(--btn-primary);
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: var(--btn-primary-hover);
  }
`;

export default TopScrollButton;
