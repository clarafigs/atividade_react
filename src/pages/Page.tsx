// pages/page.tsx
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Button />
      <Footer />
    </div>
  );
};

export default Home;
