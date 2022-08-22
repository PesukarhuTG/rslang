import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, TextBookPage, SprintPage, AudioPage, StatisticPage, NotFound} from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<MainPage/>}/>
      <Route path='/textbook' element = {<TextBookPage/>}/>
      <Route path='/sprint' element = {<SprintPage/>}/>
      <Route path='/audio' element = {<AudioPage/>}/>
      <Route path='/statistic' element = {<StatisticPage/>}/>
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
  );
}

export default App;
