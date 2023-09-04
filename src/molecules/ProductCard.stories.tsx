import React from 'react';
import ProductCardComponent from './ProductCard';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default {
  title: 'Product',
  component: ProductCardComponent,
};

const ProductCardTemplate = (args: any) => (
  <Theme>
    <ProductCardComponent {...args} />
  </Theme>
);

export const ProductCard = ProductCardTemplate.bind({});
ProductCard.args = {
  name: 'Holland & Barrett Pure Cod Liver Oil 1000mg 60 Capsules',
  price: '8.99',
  imgSrc: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/046901_A.jpg',
};
