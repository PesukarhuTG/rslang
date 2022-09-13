import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Context } from '.';
import { MainPage, TextbookPage, SprintPage, AudioPage, StatisticPage, NotFound } from './pages';

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('tokenUser')) {
      store.setAuth(true);
    }
  }, []);

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

export default observer(App);
