import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopScrollButton from '../TopScrollButton';
import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
  disableHeader?: boolean;
  disableFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, disableHeader = false, disableFooter = false }) => {
  window.addEventListener('scroll', () => {
    const clientHeight = document.documentElement.clientHeight as number;
    const topButton = document.querySelector('.top-btn') as HTMLElement;

    if (window.scrollY > clientHeight / 4) {
      topButton.classList.add('active-top');
    } else {
      topButton.classList.remove('active-top');
    }
  });

  return (
    <Container $position={disableFooter}>
      {!disableHeader && <Header />}
      {children}
      {!disableFooter && <Footer />}
      <TopScrollButton />
    </Container>
  );
};

const Container = styled.div<{
  $position: boolean;
}>`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;

  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({ $position }) => ($position ? 'justify-content: start' : 'justify-content: space-between')}
`;

export default Layout;
