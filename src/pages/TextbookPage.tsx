import React from 'react';
import CardAlbum from '../components/CardAlbum';
import Layout from '../components/Layout/Layout';

const TextbookPage = () => {
  return (
    <Layout>
      <CardAlbum group={'1'} aPage={'1'}></CardAlbum>
    </Layout>
  );
};

export default TextbookPage;
