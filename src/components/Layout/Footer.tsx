import React from 'react';
import styled from 'styled-components';
import footerAuthorIco from '../../assets/svg/footer-author-ico.svg';
import footerRssIco from '../../assets/svg/footer-rss-ico.svg';

const Footer = () => {
  return (
    <AppFooter>
      <FooterAuthors>
        <FooterAuthorsItem href="https://github.com/serjml" rel="noopener noreferrer" target="_blank">
          @serjml
        </FooterAuthorsItem>
        <FooterAuthorsItem href="https://github.com/PesukarhuTG" rel="noopener noreferrer" target="_blank">
          @pesukarhutg
        </FooterAuthorsItem>
        <FooterAuthorsItem href="https://github.com/lneer" rel="noopener noreferrer" target="_blank">
          @lneer
        </FooterAuthorsItem>
      </FooterAuthors>
      <div>2022</div>
      <FooterRssLink href="https://rs.school/" rel="noopener noreferrer" target="_blank"></FooterRssLink>
    </AppFooter>
  )
}

const AppFooter = styled.footer`
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterAuthors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

const FooterAuthorsItem = styled.a`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 65px;
  background: url(${footerAuthorIco}) no-repeat;
  transition: 0.3s;
  
  &:hover {
    color: var(--primary-light);
    filter: invert(19%) sepia(8%) saturate(3615%) hue-rotate(37deg) brightness(98%) contrast(86%);
  }
`;

const FooterRssLink = styled.a`
  height: 65px;
  width: 175px;
  background: url(${footerRssIco}) no-repeat;
  transition: 0.3s;

  &:hover {
    filter: invert(19%) sepia(8%) saturate(3615%) hue-rotate(37deg) brightness(98%) contrast(86%);
`;

export default Footer