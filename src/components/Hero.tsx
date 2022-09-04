import React from 'react';
import styled from 'styled-components';

interface InnerHeroProps {
  image: string;
  content: React.ReactNode;
}

const InnerHero: React.FC<InnerHeroProps> = ({ image, content }) => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>{content}</HeroText>
        <img src={image} alt="hero-logo" width={300} />
      </HeroContent>
    </HeroSection>
  );
};

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <HeroTitle>{children}</HeroTitle>;
};

interface DescriptionProps {
  children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <HeroDescription>{children}</HeroDescription>;
};

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 0;

  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }

  @media (max-width: 530px) {
    margin-bottom: 20px;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  display: flex;
  padding-left: 40px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
    padding-left: 0;
  }
`;

const HeroTitle = styled.h2`
  margin: 0;
  font-size: 50px;
  color: var(--primary);

  @media (max-width: 1100px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

const HeroText = styled.div`
  max-width: 850px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const HeroDescription = styled.p`
  padding-left: 40px;
  font-size: 24px;
  color: var(--primary);
  border-left: 10px solid var(--primary);

  @media (max-width: 500px) {
    font-size: 20px;
    padding-left: 20px;
    border-left: 5px solid var(--primary);
  }
`;

type InnerHeroType = typeof InnerHero;

interface HeroType extends InnerHeroType {
  Title: typeof Title;
  Description: typeof Description;
}

const Hero = InnerHero as HeroType;
Hero.Title = Title;
Hero.Description = Description;

export default Hero;
