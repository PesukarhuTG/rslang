import React from 'react';
import { Layout, Hero, Advantages, Feature, Team, Title } from '../components';
import mainImg from '../assets/svg/hero-main-logo.svg';

const MainPage = () => {
  return (
    <Layout>
      <Hero
        image={mainImg}
        content={
          <Hero.Title>
            <strong>Бесплатное</strong> обучение английскому языку
          </Hero.Title>
        }
      />
      <Title content="Наши преимущества" />
      <Advantages />

      <Title content="Возможности приложения" />
      <Feature />

      <Title content="О команде" />
      <Team />
    </Layout>
  );
};

export default MainPage;
