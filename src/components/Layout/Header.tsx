import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import headerBtnIco from '../../assets/svg/header-btn-ico.svg';
import { Link, useLocation } from 'react-router-dom';
import ModalAuthorization from '../ModalAuthorization';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Header = () => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const { store } = useContext(Context);

  const onToggle = (): void => {
    const burger = document.querySelector('.nav') as HTMLElement;
    burger?.classList.toggle('burger-active');
  };

  useEffect(() => {
    if (isVisibleModal) {
      const widthScroll = window.innerWidth - document.body.offsetWidth;

      document.body.style.cssText = `
          overflow: hidden;
          padding-right: ${widthScroll}px;
      `;
    } else {
      document.body.style.cssText = '';
    }
  }, [isVisibleModal]);

  return (
    <AppHeader>
      <HeaderLogo to="/">RSS Lang</HeaderLogo>
      <Container>
        <HeaderNav className="nav">
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
        <HeaderBurger className="burger-menu" onClick={onToggle}>
          <BurgerMenuLines>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
          </BurgerMenuLines>
        </HeaderBurger>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const HeaderLogo = styled(Link)`
  color: var(--primary);
  font-weight: 700;
  font-size: 54px;

  &:hover {
    color: var(--primary-light) !important;
  }

  @media (max-width: 680px) {
    font-size: 34px;
  }

  @media (max-width: 460px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 680px) {
    gap: 10px;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  margin-left: auto;
  margin-right: 30px;
  gap: 30px;

  &:nth-child(1):hover {
    color: var(--primary);
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    margin-right: 0;
    padding-top: 100px;
    padding-left: 40px;
    gap: 20px;

    position: fixed;
    top: 0;
    right: -360px;
    width: 360px;
    height: 100%;
    background-color: var(--primary-dark);
    transition: right 0.4s;
    z-index: 2;
  }
`;

const HeaderLink = styled(Link)<{
  $active: boolean;
}>`
  color: ${({ $active }) => ($active ? 'var(--primary)' : 'var(--primary-light)')} !important;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary) !important;
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

  @media (max-width: 680px) {
    font-size: 20px;
    padding-left: 60px;
    padding-right: 20px;
    height: 50px;
  }
`;

const HeaderBurger = styled.div`
  display: none;
  z-index: 3;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const BurgerMenuLines = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;

  &:hover > * {
    background-color: var(--primary);
  }
`;

const BurgerLine = styled.div`
  width: 30px;
  height: 2px;
  margin: 4px 0;
  background-color: var(--primary-light);
  transition: all 0.3s ease;
`;

export default observer(Header);
