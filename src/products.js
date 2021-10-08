import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';

export const products = [
  {
    id: 1,
    name: "Men's Baseball T-Shirt",
    description: "Manjaro 10 years splash colors - Men's Baseball T-Shirt",
    image: product1,
    price: '22,49 €',
    colors: {
      'white/black':
        'linear-gradient(to left, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%)',
      'white/navy':
        'linear-gradient(to left, rgb(255, 255, 255) 50%, rgb(0, 46, 89) 50%)',
    },
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 2,
    name: "Men's Premium Hoodie",
    description: "Manjaro 10 years splash colors - Men's Premium Hoodie",
    image: product2,
    price: '36,49 €',
    colors: {
      black: 'rgb(0, 0, 0)',
      'heather denim': 'rgb(59, 72, 86)',
      'charcoal grey': 'rgb(96, 94, 94)',
      'olive green': 'rgb(95, 101, 60)',
      white: 'rgb(255, 255, 255)',
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'Snapback Cap',
    description: 'Manjaro 10 years splash colors - Snapback Cap',
    image: product3,
    price: '16,99 €',
    colors: {
      'black/grey':
        'linear-gradient(to left, rgb(113, 112, 105) 50%, rgb(0, 0, 0) 50%)',
      'navy/red':
        'linear-gradient(to left, rgb(0, 46, 89) 50%, rgb(179, 18, 18) 50%)',
    },
    sizes: ['One Size'],
  },
];
