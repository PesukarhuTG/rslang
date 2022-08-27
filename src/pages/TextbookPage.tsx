import React, { useState } from 'react';
import { Hero, Album, Select, Button, Pagination } from '../components';
import Layout from '../components/Layout/Layout';
import textBookImg from '../assets/svg/hero-textbook-logo.svg';

const TextbookPage = () => {
  const [difficult, setDifficult] = useState('0');
  const [currentPage, setCurrentPage] = useState('1');
  const options = [
    { label: 'A1 - Beginner', value: '0' },
    { label: 'A2 - Elementary', value: '1' },
    { label: 'B1 - Intermediate', value: '2' },
    { label: 'B2 - Upper Intermediate', value: '3' },
    { label: 'C1 - Advanced', value: '4' },
    { label: 'C2 - Proficiency', value: '5' },
  ];
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
      <Select options={options} onChange={value => setDifficult(value)} />
      <Button label={'Спринт'} />
      <Button label={'АудиоВызов'} />
      <Pagination page={+currentPage} onChange={page => setCurrentPage(`${page}`)} total={20} />
      <Album group={difficult} aPage={currentPage} />
    </Layout>
  );
};

export default TextbookPage;
