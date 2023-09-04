import React from 'react';
import FrequentlyBoughtTogetherListComponent from './FrequentlyBoughtTogetherList';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default {
  title: 'FrequentlyBoughtTogetherList',
  component: FrequentlyBoughtTogetherListComponent,
};

const FrequentlyBoughtTogetherListTemplate = (args: any) => (
  <Theme>
    <FrequentlyBoughtTogetherListComponent {...args} />
  </Theme>
);

export const FrequentlyBoughtTogetherListGroup = FrequentlyBoughtTogetherListTemplate.bind({});
FrequentlyBoughtTogetherListGroup.args = {
  products: [
    {
      id: 60007741,
      image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/046901_A.jpg',
      sku: '046701',
      title: 'Holland & Barrett Pure Cod Liver Oil 1000mg 60 Capsules',
      price: '8.99',
      stock: 0,
    },
  ],
};
