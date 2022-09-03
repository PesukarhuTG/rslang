import React, { useState } from 'react';
import { AudioGame, Layout } from '../components';
const wordExample = {
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
  transcription: '[w?p?n]',
  textExampleTranslate: 'Мечи использовались в качестве оружия на протяжении тысячелетий',
  textMeaningTranslate: 'Оружие - это объект, используемый для причинения вреда людям',
  wordTranslate: 'оружие',
};

const NotFound = () => {
  const [isAnswer, setIsAnswer] = useState(false);
  return (
    <Layout disableFooter={true}>
      <AudioGame
        data={wordExample}
        isAnswer={isAnswer}
        onClick={() => {
          if (isAnswer) {
            return setIsAnswer(false);
          } else return setIsAnswer(true);
        }}
      />
    </Layout>
  );
};

export default NotFound;
