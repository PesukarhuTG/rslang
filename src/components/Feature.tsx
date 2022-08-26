import React from 'react';
import styled from 'styled-components';

const Feature = () => {
  return (
    <FeatureSection>
      <FeatureContent>
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
      </FeatureContent>
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

const FeatureSection = styled.section`
  padding-top: 75px;
  padding-bottom: 120px;
`;

const FeatureContent = styled.div`
  display: flex;
  gap: 20px;
`;

const FeatureCard = styled.div`
  padding: 15px 15px 40px;
  min-width: 325px;
  border-radius: 10px;
  background-color: var(--card-background);
`;

const FeatureItemTitle = styled.h4`
  margin-bottom: 20px;
  color: var(--primary);
  font-size: 36px;
  font-weight: 700;
`;

const FeatureItemDescr = styled.p`
  margin: 0;
`;

export default Feature;
