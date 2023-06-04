import { CardProps } from 'components/Card/Card';

import {
  FlowerEight,
  FlowerEleven,
  FlowerFive,
  FlowerFour,
  FlowerNine,
  FlowerOne,
  FlowerSeven,
  FlowerSix,
  FlowerTen,
  FlowerThree,
  FlowerTwelve,
  FlowerTwo,
} from '../assets/images';

const cards = [
  {
    ordinal: 1,
    title: 'Card One',
    description: 'This is the description for Card one',
    image: FlowerOne,
  },
  {
    ordinal: 2,
    title: 'Card Two',
    description: 'This is the description for Card two',
    image: FlowerTwo,
  },
  {
    ordinal: 3,
    title: 'Card Three',
    description: 'This is the description for Card three',
    image: FlowerThree,
  },
  {
    ordinal: 4,
    title: 'Card Four',
    description: 'This is the description for Card four',
    image: FlowerFour,
  },
  {
    ordinal: 5,
    title: 'Card Five',
    description: 'This is the description for Card five',
    image: FlowerFive,
  },
  {
    ordinal: 6,
    title: 'Card Six',
    description: 'This is the description for Card six',
    image: FlowerSix,
  },
  {
    ordinal: 7,
    title: 'Card Seven',
    description: 'This is the description for Card seven',
    image: FlowerSeven,
  },
  {
    ordinal: 8,
    title: 'Card Eight',
    description: 'This is the description for Card eight',
    image: FlowerEight,
  },
  {
    ordinal: 9,
    title: 'Card Nine',
    description: 'This is the description for Card nine',
    image: FlowerNine,
  },
  {
    ordinal: 10,
    title: 'Card Ten',
    description: 'This is the description for Card ten',
    image: FlowerTen,
  },
  {
    ordinal: 11,
    title: 'Card Eleven',
    description: 'This is the description for Card eleven',
    image: FlowerEleven,
  },
  {
    ordinal: 12,
    title: 'Card Twelve',
    description: 'This is the description for Card twelve',
    image: FlowerTwelve,
  },
] as CardProps[];

export default cards;
