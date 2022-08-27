import React, { useState } from 'react';
import { Hero, Album, Select, Button, Pagination } from '../components';
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
  const [difficult, setDifficult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
          <h2>Выберите уровень</h2>
          <Select options={options} onChange={value => setDifficult(+value)} />
        </Selector>
        <ButtonGroup>
          <Button label="Спринт" />
          <Button label="АудиоВызов" />
        </ButtonGroup>
        <PaginationWrapper>
          <Pagination page={+currentPage} onChange={page => setCurrentPage(page)} total={30} />
        </PaginationWrapper>
      </ControlsWrapper>
      <Album group={difficult} page={currentPage - 1} />
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
