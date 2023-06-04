import React, { useEffect } from 'react';

import Card, { CardProps } from '../Card/Card';

interface CardListProps {
  cards: CardProps[];
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="card-list container">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
        {cards.map((card: CardProps) => (
          <div className="col mb-4" key={card.ordinal}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              ordinal={card.ordinal}
              imageWidth={200}
              imageHeight={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
