import React from 'react';
import FlashCard from '../components/FlashCard';
import Layout from '../components/Layout/Layout';

// type Querry = {
//   [key: string]: string;
// };

// const fetchreq = async (url: string, method: 'GET' | 'POST' = 'GET', querry?: Querry) => {
//   const link = 'https://react-learnwords-example.herokuapp.com';
//   let querryUrl = '';
//   if (querry) {
//     const querryKeys: string[] = Object.keys(querry);
//     querryUrl = '?' + querryKeys.map(key => `${key}=${querry[key]}`).join('&');
//   }
//   const fullUrl = `${link}/${url}${querryUrl}`;
//   const response = await fetch(fullUrl, {
//     method: method,
//   });
//   return await response.json();
// };

// const words = fetchreq('words', 'GET', { group: '1', page: '1' });

const exampleCard = {
  id: '5e9f5ee35eb9e72bc21af733',
  group: 1,
  page: 2,
  word: 'weapon',
  image: 'files/03_0660.jpg',
  audio: 'files/03_0660.mp3',
  audioMeaning: 'files/03_0660_meaning.mp3',
  audioExample: 'files/03_0660_example.mp3',
  textMeaning: 'A <i>weapon</i> is an object used to hurt people.',
  textExample: 'Swords have been used as <b>weapons</b> for thousands of years.',
  transcription: '[wépən]',
  textExampleTranslate: 'Мечи использовались в качестве оружия на протяжении тысячелетий',
  textMeaningTranslate: 'Оружие - это объект, используемый для причинения вреда людям',
  wordTranslate: 'оружие',
};

const TextBookPage = () => {
  return (
    <Layout>
      <p>Учебник</p>
      <FlashCard word={exampleCard}></FlashCard>
    </Layout>
  );
};

export default TextBookPage;
