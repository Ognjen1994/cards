import { render, screen } from '@testing-library/react';
import { FlowerOne, FlowerTwo } from 'assets/images';
import { CardProps } from 'components/Card/Card';
import React from 'react';

import CardList from './CardList';

describe('CardList component', () => {
  test('renders a list of cards with correct props', () => {
    const cards = [
      {
        ordinal: 1,
        title: 'Card 1',
        description: 'Description 1',
        image: FlowerOne,
      },
      {
        ordinal: 2,
        title: 'Card 2',
        description: 'Description 2',
        image: FlowerTwo,
      },
    ] as CardProps[];

    const { container } = render(<CardList cards={cards} />);
    const cardElements = container.getElementsByClassName('card');

    expect(cardElements).toHaveLength(cards.length);

    Array.from(cardElements).forEach((cardElement, index) => {
      const card = cards[index];
      const cardTitle = screen.getByText(card.title);
      const cardDescription = screen.getByText(card.description);
      const cardImage = cardElement.querySelector('.card__image') as HTMLImageElement;

      expect(cardTitle).toBeInTheDocument();
      expect(cardDescription).toBeInTheDocument();
      expect(cardImage).toBeInTheDocument();
      expect(cardImage.alt).toBe(card.title);
    });
  });
});
