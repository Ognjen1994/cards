import './Card.scss';

import React, { useState } from 'react';

import { Placeholder } from '../../assets/images';

export interface CardProps {
  title: string;
  description: string;
  image: string;
  ordinal: number;
  imageWidth: number;
  imageHeight: number;
}

const Card = ({
  title,
  description,
  image,
  ordinal,
  imageWidth,
  imageHeight,
}: CardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="card">
      <img
        src={isImageLoaded ? image : Placeholder}
        alt={title}
        className="card__image"
        loading="lazy"
        width={imageWidth}
        height={imageHeight}
        onLoad={handleImageLoad}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = Placeholder;
        }}
      />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__ordinal">Ordinal number: {ordinal}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
