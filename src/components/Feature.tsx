import React from 'react';
import styled from 'styled-components';

const Feature = () => {
  return (
    <FeatureSection>
      <FeatureItem
        title="Учебник"
        descr="Более 3600 слов для изучения, разбитых по уровням сложности для разных типов подготовки"
      />
      <FeatureItem
        title="Мини-игры"
        descr="Вам доступно две мини-игры, которые позволят сделать изучение языка увлекательным процессом!"
      />
      <FeatureItem
        title="Сложные слова"
        descr="После регистрации вам будет доступен персональный словарь для тренировки наиболее важных слов"
      />
      <FeatureItem
        title="Статистика"
        descr="Возможность отслеживать свой прогресс в реальном времени, вдохновляться этим и гордится!"
      />
    </FeatureSection>
  );
};

interface FeatureItemProps {
  title: string;
  descr: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, descr }) => {
  return (
    <FeatureCard>
      <FeatureItemTitle>{title}</FeatureItemTitle>
      <FeatureItemDescr>{descr}</FeatureItemDescr>
    </FeatureCard>
  );
};

const FeatureSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: 20px 15px;
  min-width: 326px;
  border-radius: 10px;
  background-color: var(--card-background);
`;

const FeatureItemTitle = styled.h4`
  margin-bottom: 20px;
  color: var(--primary);
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 530px) {
    font-size: 22px;
  }
`;

const FeatureItemDescr = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  line-height: 1.7;

  @media (max-width: 530px) {
    font-size: 18px;
  }
`;

export default Feature;
