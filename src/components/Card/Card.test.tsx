import { render, screen } from '@testing-library/react';
import React from 'react';

import Card from './Card';

describe('Card component', () => {
  test('renders title, description, and ordinal number', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const ordinal = 1;

    render(
      <Card
        title={title}
        description={description}
        ordinal={ordinal}
        image=""
        imageWidth={100}
        imageHeight={100}
      />,
    );

    const titleElement = screen.getByText(/Test Title/i);
    const descriptionElement = screen.getByText(/Test Description/i);
    const ordinalElement = screen.getByText(/Ordinal number: 1/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toEqual(title);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement.textContent).toEqual(description);
    expect(ordinalElement).toBeInTheDocument();
    expect(ordinalElement.textContent).toEqual(`Ordinal number: ${ordinal}`);
  });
});
