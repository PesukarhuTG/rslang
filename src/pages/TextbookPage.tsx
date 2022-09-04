import React, { useState } from 'react';
import { Hero, Album, Select, Button, Pagination, Subtitle, SprintGame, AudioGame } from '../components';
import Layout from '../components/Layout/Layout';
import textBookImg from '../assets/svg/hero-textbook-logo.svg';
import styled from 'styled-components';

const options = [
  { value: '0', label: 'A1 - Beginner' },
  { value: '1', label: 'A2 - Elementary' },
  { value: '2', label: 'B1 - Intermediate' },
  { value: '3', label: 'B2 - Upper Intermediate' },
  { value: '4', label: 'C1 - Advanced' },
  { value: '5', label: 'C2 - Proficiency' },
];

type PageView = 'TextBook' | 'Sprint' | 'Audio';
const TextbookPage = () => {
  const [view, setView] = useState<PageView>('TextBook');
  const [level, setLevel] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  if (view === 'Sprint')
    return (
      <Layout disableFooter={true}>
        <SprintGame level={level} page={currentPage - 1} gameEnd={() => setView('TextBook')} />
      </Layout>
    );
  if (view === 'Audio')
    return (
      <Layout disableFooter={true}>
        <AudioGame level={level} page={currentPage - 1} gameEnd={() => setView('TextBook')} />
      </Layout>
    );
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
          <Select options={options} onChange={value => setLevel(+value)} />
        </Selector>
        <ButtonGroup>
          <Button label="Спринт" onClick={() => setView('Sprint')} />
          <Button label="Аудиовызов" onClick={() => setView('Audio')} />
        </ButtonGroup>
        <PaginationWrapper>
          <Pagination page={+currentPage} onChange={page => setCurrentPage(page)} total={30} />
        </PaginationWrapper>
      </ControlsWrapper>
      <Album group={level} page={currentPage - 1} level={level} />
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
