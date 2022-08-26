import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, TextbookPage, SprintPage, AudioPage, StatisticPage, NotFound } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/textbook" element={<TextbookPage />} />
      <Route path="/sprint" element={<SprintPage />} />
      <Route path="/audio" element={<AudioPage />} />
      <Route path="/statistic" element={<StatisticPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
