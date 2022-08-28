import React from 'react';
import styled from 'styled-components';
import authorImage1 from '../assets/svg/team-author-1.png';
import authorImage2 from '../assets/svg/team-author-2.png';
import authorImage3 from '../assets/svg/team-author-3.png';

const Team = () => {
  return (
    <TeamSection>
      <TeamItem>
        <TeamItemImage>
          <img src={authorImage1} alt="author" />
        </TeamItemImage>
        <div>
          <TeamItemTitle>Татьяна</TeamItemTitle>
          <TeamItemSubtitle>Team Lead | Frontend developer</TeamItemSubtitle>
          <TeamItemDescription>
            <li>Lorem ipsum dolor Excepteur sint occaecat </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
          </TeamItemDescription>
        </div>
      </TeamItem>

      <TeamItem>
        <TeamItemImage>
          <img src={authorImage2} alt="author" />
        </TeamItemImage>
        <div>
          <TeamItemTitle>Алексей</TeamItemTitle>
          <TeamItemSubtitle>Frontend-developer</TeamItemSubtitle>
          <TeamItemDescription>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </TeamItemDescription>
        </div>
      </TeamItem>

      <TeamItem>
        <TeamItemImage>
          <img src={authorImage3} alt="author" />
        </TeamItemImage>
        <div>
          <TeamItemTitle>Сергей</TeamItemTitle>
          <TeamItemSubtitle>Frontend-developer</TeamItemSubtitle>
          <TeamItemDescription>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </TeamItemDescription>
        </div>
      </TeamItem>
    </TeamSection>
  );
};

const TeamSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 80px;

  @media (max-width: 1420px) {
    grid-template-columns: 1fr;
  }
`;

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (max-width: 1420px) {
    margin-bottom: 50px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

const TeamItemImage = styled.div`
  justify-self: center;

  @media (max-width: 1420px) {
    margin-right: 80px;
  }

  @media (max-width: 1020px) {
    margin-top: 30px;
    margin-right: 0;
    align-self: center;
  }
`;

const TeamItemTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 20px;
  color: var(--primary);
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 1420px) {
    margin-top: 0;
  }

  @media (max-width: 930px) {
    margin-top: 30px;
  }
`;

const TeamItemSubtitle = styled.p`
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 700;
`;

const TeamItemDescription = styled.ul`
  margin-top: 40px;
  padding-left: 30px;
  padding-right: 10px;
`;

export default Team;
