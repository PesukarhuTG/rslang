import React from 'react';
import FlashCard from '../components/FlashCard';
import Layout from '../components/Layout/Layout';

const exampleCard = [
  {
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
  },
  {
    id: '5e9f5ee35eb9e72bc21afbfc',
    group: 3,
    page: 4,
    word: 'café',
    image: 'files/05_1885.jpg',
    audio: 'files/05_1885.mp3',
    audioMeaning: 'files/05_1885_meaning.mp3',
    audioExample: 'files/05_1885_example.mp3',
    textMeaning: 'A <i>café</i> is a small restaurant where you can buy drinks and simple meals.',
    textExample: 'Monica works part-time at a <b>café</b>.',
    transcription: '[kæféi]',
    textExampleTranslate: 'Моника работает неполный рабочий день в кафе',
    textMeaningTranslate: 'Кафе - это небольшой ресторан, где можно купить напитки и простые блюда',
    wordTranslate: 'кафе',
  },
  {
    id: '5e9f5ee35eb9e72bc21afc0b',
    group: 3,
    page: 4,
    word: 'width',
    image: 'files/05_1900.jpg',
    audio: 'files/05_1900.mp3',
    audioMeaning: 'files/05_1900_meaning.mp3',
    audioExample: 'files/05_1900_example.mp3',
    textMeaning: '<i>Width</i> is the distance from one side of something to the other side.',
    textExample: 'The man is measuring the <b>width</b> of the box.',
    transcription: '[widθ]',
    textExampleTranslate: 'Человек измеряет ширину коробки',
    textMeaningTranslate: 'Ширина - это расстояние от одной стороны чего-либо до другой стороны',
    wordTranslate: 'ширина',
  },
];

const TextbookPage = () => {
  return (
    <Layout>
      <p>Учебник</p>
      <FlashCard word={exampleCard[0]}></FlashCard>
      <FlashCard word={exampleCard[1]}></FlashCard>
      <FlashCard word={exampleCard[2]}></FlashCard>
    </Layout>
  );
};

export default TextbookPage;
