import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

interface LayoutProps {
  children?: React.ReactNode;
  disableHeader?: boolean;
  disableFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, disableHeader = false, disableFooter = false }) => {
  return (
    <Container $position={disableFooter}>
      {!disableHeader && <Header />}
      {children}
      {!disableFooter && <Footer />}
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
  ${({ $position }) => ($position ? 'justify-content: start' : 'justify-content: space-between')}

  @media (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Layout;
