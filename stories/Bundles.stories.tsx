import React from 'react';
import { Bundles } from './Bundles';

export default {
  title: 'Bundles',
  component: Bundles,
  parameters: {
    mockData: [
      {
        url: 'https://hb.demo/products',
        method: 'GET',
        status: 200,
        response: {
          data: {
            products: [
              {
                id: 60007741,
                image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/046901_A.jpg',
                sku: '046701',
                title: 'Holland & Barrett Pure Cod Liver Oil 1000mg 60 Capsules',
                price: '8.99',
                stock: 0,
              },
              {
                id: 6100000106,
                image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/047306_A.jpg',
                sku: '047306',
                title: 'Holland & Barrett Omega 3 Fish Oil 1000mg 60 Capsules',
                price: '6.99',
                stock: 10,
              },
              {
                id: 6100000246,
                image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/061513_A.jpg',
                sku: '061513',
                title: 'Holland & Barrett Magnesium 375mg 30 Tablets',
                price: '3.99',
                stock: 100,
              },
              {
                id: 60011168,
                image: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/047337_A.jpg',
                sku: '047337',
                title: 'Holland & Barrett Iron & Vitamin C 14mg 30 Tablets',
                price: '2.99',
                stock: 100,
              },
            ],
          },
        },
      },
    ],
  },
};

const Template = () => <Bundles />;

export const FetchCall = Template.bind({});

// export const Primary = {};
