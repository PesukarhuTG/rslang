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
          <Link to="/textbook">Учебник</Link>
          <Link to="/sprint">Спринт</Link>
          <Link to="/audio">Аудиовызов</Link>
          <Link to="/statistic">Статистика</Link>
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
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 40px;
`;

const HeaderBtn = styled.button`
  width: 150px;
  height: 60px;
  padding-left: 35px;
  background: url(${headerBtnIco}) var(--primary) no-repeat 20px;
  border-radius: 10px;
`;

export default Header;