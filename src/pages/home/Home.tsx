import React, { useEffect, useState } from 'react';

import CardList from '../../components/CardList/CardList';
import cardData from '../../data/cardData';

const Home = () => {
  return (
    <div className="home">
      <CardList cards={cardData} />
    </div>
  );
};

export default Home;
