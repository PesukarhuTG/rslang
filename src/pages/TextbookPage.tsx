import React, { useEffect, useState } from 'react';
import { Hero, Album, Select, Button, Pagination, Subtitle, SprintGame } from '../components';
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

const TextbookPage = () => {
  const engLevel = localStorage.getItem('engLevel') ? Number(localStorage.getItem('engLevel')) : 0;
  const page = localStorage.getItem('currentPage') ? Number(localStorage.getItem('currentPage')) : 1;

  const [currentPage, setCurrentPage] = useState(page);
  const [level, setLevel] = useState(engLevel);
  const [isGame, setISGame] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('currentPage', `${currentPage}`);
    localStorage.setItem('engLevel', `${level}`);
  }, [currentPage, level]);

  if (isGame)
    return (
      <Layout disableFooter={true}>
        <SprintGame level={level} page={currentPage - 1} gameEnd={() => setISGame(false)} />
      </Layout>
    );

  return (
    <Layout>
      <Hero
        image={textBookImg}
        content={
          <>
            <Hero.Title>
              <strong>«Электронный учебник»</strong>
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
          <Settings>
            <Select
              defaultIndex={engLevel}
              options={options}
              onChange={value => {
                setLevel(+value);
                setCurrentPage(1);
              }}
            />
            <ButtonGroup>
              <Button label="Спринт" onClick={() => setISGame(true)} />
              <Button label="Аудиовызов" />
            </ButtonGroup>
          </Settings>
        </Selector>
        <PaginationWrapper>
          <Pagination page={+currentPage} onChange={page => setCurrentPage(page)} total={30} />
        </PaginationWrapper>
      </ControlsWrapper>
      <Album group={level} page={currentPage - 1} level={level} />
    </Layout>
  );
};

const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
`;

const Selector = styled.div`
  width: 100%;
  & > :first-child {
    margin-bottom: 40px;
  }
`;

const Settings = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: flex-end;
`;

const PaginationWrapper = styled.div`
  justify-self: center;
  align-self: center;
  padding: 20px 0;
`;

export default TextbookPage;
