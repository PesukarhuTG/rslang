import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import headerBtnIco from '../../assets/svg/header-btn-ico.svg';
import { Link, useLocation } from 'react-router-dom';
import ModalAuthorization from '../ModalAuthorization';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Header = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const { store } = useContext(Context);

  return (
    <AppHeader>
      <HeaderLogo to="/">RSS Lang</HeaderLogo>
      <Container>
        <HeaderNav>
          <HeaderNavItem to="/textbook" label="Учебник" />
          <HeaderNavItem to="/sprint" label="Спринт" />
          <HeaderNavItem to="/audio" label="Аудиовызов" />
          <HeaderNavItem to="/statistic" label="Статистика" />
        </HeaderNav>
        <HeaderBtn
          onClick={() => {
            !store.isAuth ? setIsVisibleModal(true) : store.logout();
          }}
        >
          {store.isAuth ? 'Выйти' : 'Войти'}
        </HeaderBtn>
        <ModalAuthorization visible={isVisibleModal} onClose={() => setIsVisibleModal(false)} />
      </Container>
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
  min-height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 20px 0;
    flex-direction: column;
    gap: 20px;
  }
`;

const HeaderLogo = styled(Link)`
  color: var(--primary);
  font-weight: 700;
  font-size: 54px;

  &:hover {
    color: var(--primary);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  margin-right: 40px;
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
  height: 60px;
  padding-left: 70px;
  padding-right: 30px;
  background: url(${headerBtnIco}) var(--primary) no-repeat 20px;
  border: none;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--btn-primary-hover);
  }
`;

export default observer(Header);
