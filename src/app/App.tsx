import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/main';
import { TextBookPage } from '../pages/textbook';
import { SprintPage } from '../pages/sprint';
import { AudioPage } from '../pages/audioCall';
import { StatisticPage } from '../pages/statistic';
import { NotFound } from '../pages/notFound';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<MainPage/>}/>
      <Route path='/textbook' element = {<TextBookPage/>}/>
      <Route path='/sprint' element = {<SprintPage/>}/>
      <Route path='/audiocall' element = {<AudioPage/>}/>
      <Route path='/statistic' element = {<StatisticPage/>}/>
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
  );
}

export default App;
