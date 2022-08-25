import React from 'react';
import { Layout, Hero, Advantages } from '../components';
import mainImg from '../assets/svg/hero-main-logo.svg';

const MainPage = () => {
  return (
    <Layout>
      <Hero
        image={mainImg}
        content={
          <>
            <Hero.Title>
              <strong>Бесплатное</strong> обучение английскому языку
            </Hero.Title>
          </>
        }
      />
      <Advantages />
    </Layout>
  );
};

export default MainPage;
