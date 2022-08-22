import React from 'react';
import styled from 'styled-components';
import '../../styles/style.css';
import headerBtnIco from '../../assets/svg/header-btn-ico.svg'

const AppHeader = styled.header`
  height: 170px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`;

const HeaderLogo = styled.div`
  color: var(--primary);
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 54px;
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 40px;
  font-family: 'Open Sans';
  font-size: 26px;
`;

const HeaderBtn = styled.button`
  width: 150px;
  height: 60px;
  padding-left: 35px;
  background: url(${headerBtnIco}) var(--primary) no-repeat 20px;
  border-radius: 10px;
  font-family: 'Open Sans';
  font-size: 26px;
`;

function Header() {
  return (
    <div className="container">
      <AppHeader>
      <HeaderLogo>
        RSS Lang
      </HeaderLogo>
      <HeaderNav>
        <span>Учебник</span>
        <span>Спринт</span>
        <span>Аудиовызов</span>
        <span>Статистика</span>
        {/* <Link to="/textbook">Учебник</Link>
        <Link to="/sprint">Спринт</Link>
        <Link to="/audio">Аудиовызов</Link>
        <Link to="/statistics">Статистика</Link> */}
        </HeaderNav>
        <HeaderBtn>
          Гость
        </HeaderBtn>
      </AppHeader>
    </div>
  )
}

export default Header;