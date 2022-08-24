<<<<<<< HEAD
import FlashCard from '../components/FlashCard';
export const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="headling">Здесь будет наш проект RSLang</p>
        <FlashCard />
      </header>
    </div>
  );
};
=======
import React from 'react';
import { Layout, Hero } from '../components';
import mainImg from '../assets/svg/hero-main-logo.svg';

const MainPage = () => {
  return (
    <div className="App">
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
      </Layout>
    </div>
  );
};

export default MainPage;
>>>>>>> develop
