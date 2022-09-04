import React, { useEffect, useState } from 'react';
import { Hero, Album, Select, Button, Pagination, Subtitle } from '../components';
import Layout from '../components/Layout/Layout';
import textBookImg from '../assets/svg/hero-textbook-logo.svg';
import styled from 'styled-components';

const options = [
  { label: 'A1 - Beginner', value: '0' },
  { label: 'A2 - Elementary', value: '1' },
  { label: 'B1 - Intermediate', value: '2' },
  { label: 'B2 - Upper Intermediate', value: '3' },
  { label: 'C1 - Advanced', value: '4' },
  { label: 'C2 - Proficiency', value: '5' },
];

const TextbookPage = () => {
  const engLevel = localStorage.getItem('engLevel') ? Number(localStorage.getItem('engLevel')) : 0;
  const page = localStorage.getItem('currentPage') ? Number(localStorage.getItem('currentPage')) : 1;

  const [difficult, setDifficult] = useState(engLevel);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    localStorage.setItem('currentPage', `${currentPage}`);
    localStorage.setItem('engLevel', `${difficult}`);
  }, [currentPage, difficult]);

  return (
    <Layout>
      <Hero
        image={textBookImg}
        content={
          <>
            <Hero.Title>
              <strong>"Электронный учебник"</strong>
            </Hero.Title>
            <Hero.Description>
              Более 3600 слов, разбитых на разделы по уровню подготовки. Выбирай уровень, который подойдет именно тебе!
            </Hero.Description>
          </>
        }
      />
      <ControlsWrapper>
        <Selector>
          <Subtitle content="Выберите уровень" />
          <Select
            engLevel={engLevel}
            options={options}
            onChange={value => {
              setDifficult(+value);
              setCurrentPage(1);
            }}
          />
        </Selector>
        <ButtonGroup>
          <Button label="Спринт" />
          <Button label="Аудиовызов" />
        </ButtonGroup>
        <PaginationWrapper>
          <Pagination page={+currentPage} onChange={page => setCurrentPage(page)} total={30} />
        </PaginationWrapper>
      </ControlsWrapper>
      <Album group={difficult} page={currentPage - 1} level={difficult} />
    </Layout>
  );
};

const ControlsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-areas:
    'sel btn'
    'pag pag';
  grid-row-gap: 90px;
  margin-bottom: 70px;
`;

const Selector = styled.div`
  grid-area: sel;
  width: fit-content;
  & > :first-child {
    margin-bottom: 40px;
  }
`;

const ButtonGroup = styled.div`
  grid-area: btn;
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: flex-end;
`;

const PaginationWrapper = styled.div`
  grid-area: pag;
  justify-self: center;
`;

export default TextbookPage;
