import React from 'react';
import styled from 'styled-components';
import freeSvg from '../assets/svg/adv-free.svg';
import dictionarySvg from '../assets/svg/adv-dictionary.svg';
import gameSvg from '../assets/svg/adv-game.svg';
import progressSvg from '../assets/svg/adv-progress.svg';

const Advantages = () => {
  return (
    <AdvantagesSection>
      <AdvItem>
        <AdvSvg style={{ background: `url(${freeSvg}) no-repeat` }} />
        <AdvDescription>
          Можно заниматься абсолютно <strong>бесплатно!</strong>
        </AdvDescription>
      </AdvItem>
      <AdvItem>
        <AdvSvg style={{ background: `url(${dictionarySvg}) no-repeat` }} />
        <AdvDescription>
          Активное расширение <strong>словарного запаса</strong>
        </AdvDescription>
      </AdvItem>
      <AdvItem>
        <AdvSvg style={{ background: `url(${gameSvg}) no-repeat` }} />
        <AdvDescription>
          Увлекательная <strong>игровая форма обучения</strong>
        </AdvDescription>
      </AdvItem>
      <AdvItem>
        <AdvSvg style={{ background: `url(${progressSvg}) no-repeat` }} />
        <AdvDescription>
          Динамика <strong>своего прогресса</strong>
        </AdvDescription>
      </AdvItem>
    </AdvantagesSection>
  );
};

const AdvantagesSection = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const AdvItem = styled.div`
  max-height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdvSvg = styled.div`
  width: 177px;
  height: 177px;
`;

const AdvDescription = styled.p`
  margin-top: 40px;
  text-align: center;
`;

export default Advantages;
