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
    <Container>
      {!disableHeader && <Header />}
      {children}
      {!disableFooter && <Footer />}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
`;

export default Layout;
