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
          <TeamItemSubtitle>Frontend developer | Team Lead</TeamItemSubtitle>
          <TeamItemDescription>
            <li>Дизайн приложения</li>
            <li>Настройка проекта и БД</li>
            <li>Компоненты: кнопки, модальное окно, спиннер, преимущества, компонент звезд, таймер, бургер</li>
            <li>Организационные моменты</li>
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
            <li>Роутинг страниц</li>
            <li>Раздел «Учебник» (сборка страницы, карточки, получение данных + внедрение игр)</li>
            <li>Игра «Спринт»</li>
            <li>Игра «Аудиовызов»</li>
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
            <li>Компоненты: header, footer, hero, селект по выбору языка, пагинация, возможности, о команде</li>
            <li>Раздел «Учебник» (стилизация карточек по уровню сложности)</li>
            <li>Авторизация: настройка mobx, axios, forms, логика регистрации и авторизации</li>
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

  @media (max-width: 460px) {
    margin-bottom: 30px;
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

  @media (max-width: 530px) {
    margin-bottom: 20px;
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

  @media (max-width: 530px) {
    margin-top: 0;
  }
`;

const TeamItemTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 16px;
  color: var(--primary);
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 1420px) {
    margin-top: 0;
  }

  @media (max-width: 930px) {
    margin-top: 30px;
  }

  @media (max-width: 530px) {
    font-size: 26px;
  }
`;

const TeamItemSubtitle = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;

  @media (max-width: 530px) {
    font-size: 22px;
  }
`;

const TeamItemDescription = styled.ul`
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.6;
  padding-left: 30px;
  padding-right: 10px;

  @media (max-width: 530px) {
    font-size: 18px;
  }
`;

export default Team;
