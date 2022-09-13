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
      <FooterRssLink href="https://rs.school/" rel="noopener noreferrer" target="_blank" />
    </AppFooter>
  );
};

const AppFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 620px) {
    gap: 10px;
  }
`;

const FooterAuthors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 620px) {
    gap: 30px;
  }

  @media (max-width: 460px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const FooterAuthorsItem = styled.a`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 65px;
  font-size: 22px;
  background: url(${footerAuthorIco}) no-repeat;
  background-position: center left;
  transition: 0.3s;

  &:hover {
    color: var(--primary-light);
    filter: invert(19%) sepia(8%) saturate(3615%) hue-rotate(37deg) brightness(98%) contrast(86%);
  }

  @media (max-width: 620px) {
    background-size: 30px;
    padding-left: 36px;
  }

  @media (max-width: 530px) {
    font-size: 18px;
  }

  @media (max-width: 460px) {
    height: 32px;
  }
`;

const FooterRssLink = styled.a`
  display: block;
  height: 65px;
  width: 175px;
  background: url(${footerRssIco}) no-repeat;
  background-position: center center;
  background-size: contain;
  transition: 0.3s;

  &:hover {
    filter: invert(19%) sepia(8%) saturate(3615%) hue-rotate(37deg) brightness(98%) contrast(86%);
  }

  @media (max-width: 1200px) {
    order: -1;
  }

  @media (max-width: 620px) {
    width: 120px;
  }
`;

export default Footer;
