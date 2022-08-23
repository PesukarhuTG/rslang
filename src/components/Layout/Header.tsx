import React from 'react';
import styled from 'styled-components';
import headerBtnIco from '../../assets/svg/header-btn-ico.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppHeader>
        <HeaderLogo to="/">
          RSS Lang
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem to="/textbook">Учебник</HeaderNavItem>
          <HeaderNavItem to="/sprint">Спринт</HeaderNavItem>
          <HeaderNavItem to="/audio">Аудиовызов</HeaderNavItem>
          <HeaderNavItem to="/statistic">Статистика</HeaderNavItem>
        </HeaderNav>
        <HeaderBtn>
          Гость
        </HeaderBtn>
      </AppHeader>
  )
}

const AppHeader = styled.header`
  height: 170px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`;

const HeaderLogo = styled(Link)`
  color: var(--primary);
  font-weight: 800;
  font-size: 54px;

  &:hover {
    color: var(--primary);
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 40px;

  &:nth-child(1):hover {
    color: var(--primary);
  }
`;

const HeaderNavItem = styled(Link)`
  &:hover {
    color: var(--primary);
  }
`;

const HeaderBtn = styled.button`
  width: 150px;
  height: 60px;
  padding-left: 35px;
  background: url(${headerBtnIco}) var(--primary) no-repeat 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--btn-primary-hover);
  }
`;

export default Header;