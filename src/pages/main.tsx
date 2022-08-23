import React from 'react';
import { Layout, Hero} from '../components';
import mainImg from '../assets/svg/hero-main-logo.svg'

const MainPage = () => {
  return (
    <div className="App">
      <Layout>
        <Hero 
          image={mainImg}
          content={
            <>
              <Hero.Title><strong>Бесплатное</strong> обучение английскому языку</Hero.Title>
            </>
          }
        />
      </Layout>
    </div>
  );
};

export default MainPage;
