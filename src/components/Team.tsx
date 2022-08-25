import React from 'react';
import styled from 'styled-components';
import authorImage1 from '../assets/svg/team-author-1.png';
import authorImage2 from '../assets/svg/team-author-2.png';
import authorImage3 from '../assets/svg/team-author-3.png';

const Team = () => {
  return (
    <TeamSection>
      <TeamTitle>О команде</TeamTitle>
      <TeamContent>
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
      </TeamContent>
    </TeamSection>
  );
};

const TeamSection = styled.section`
  padding-top: 60px;
  padding-bottom: 100px;
`;

const TeamTitle = styled.h3`
  margin-bottom: 60px;
  color: var(--primary-light);
  font-size: 54px;
  font-weight: 700;
`;

const TeamContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 20px;
`;

const TeamItemImage = styled.div`
  justify-self: center;
`;

const TeamItemTitle = styled.h4`
  margin-bottom: 20px;
  color: var(--primary);
  font-size: 36px;
  font-weight: 700;
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
