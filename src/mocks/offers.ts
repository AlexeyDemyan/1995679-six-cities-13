import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: "1",
    name: 'Great Place',
    type: 'apartment',
    price: 43,
    city: 'Amsterdam',
    rating: 3,
    isPremium: true,
    isFavorite: false,
    imageSrc: 'img/apartment-01.jpg'
  },
  {
    id: "2",
    name: 'Average Place',
    type: 'House',
    price: 69,
    city: 'Berlin',
    rating: 4,
    isPremium: false,
    isFavorite: false,
    imageSrc: 'img/apartment-02.jpg'
  },
  {
    id: "3",
    name: 'Uwejja',
    type: 'Building',
    price: 100,
    city: 'Hamburg',
    rating: 5,
    isPremium: false,
    isFavorite: false,
    imageSrc: 'img/apartment-01.jpg'
  },
];
