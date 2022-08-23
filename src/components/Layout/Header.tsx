import React from 'react';
import styled from 'styled-components';
import headerBtnIco from '../../assets/svg/header-btn-ico.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  return (
    <AppHeader>
      <HeaderLogo to="/">RSS Lang</HeaderLogo>
      <HeaderNav>
        <HeaderNavItem to="/textbook" label="Учебник" />
        <HeaderNavItem to="/sprint" label="Спринт" />
        <HeaderNavItem to="/audio" label="Аудиовызов" />
        <HeaderNavItem to="/statistic" label="Статистика" />
      </HeaderNav>
      <HeaderBtn>Гость</HeaderBtn>
    </AppHeader>
  );
};

interface HeaderNavItemProps {
  to: string;
  label: string;
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ to, label }) => {
  const { pathname } = useLocation();

  return (
    <HeaderLink to={to} $active={to === pathname}>
      {label}
    </HeaderLink>
  );
};

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

const HeaderLink = styled(Link)<{
  $active: boolean;
}>`
  color: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--primary-light)')} !important;

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
