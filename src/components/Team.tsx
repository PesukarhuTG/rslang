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
            <li>разрабатывала хххххх</li>
            <li>страница «хххх»</li>
            <li>учебник и словарь</li>
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
            <li>разрабатывал хххххх</li>
            <li>страница «хххх»</li>
            <li>учебник и словарь</li>
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
            <li>разрабатывал хххххх</li>
            <li>страница «хххх»</li>
            <li>учебник и словарь</li>
          </TeamItemDescription>
        </div>
      </TeamItem>
    </TeamSection>
  );
};

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 80px;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    margin-bottom: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

const TeamItemImage = styled.div`
  justify-self: center;

  @media (max-width: 1400px) {
    margin-right: 80px;
  }

  @media (max-width: 930px) {
    margin-right: 0;
  }
`;

const TeamItemTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 20px;
  color: var(--primary);
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 1400px) {
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
  margin-bottom: 20px;
  font-weight: 300;
  padding-left: 40px;
`;

export default Team;
