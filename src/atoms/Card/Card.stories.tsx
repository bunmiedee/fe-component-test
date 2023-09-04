import React from 'react';
import CardComponent from './Card';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default {
  title: 'Base Card',
  component: CardComponent,
};

const CardTemplate = (args: any) => (
  <Theme>
    <CardComponent {...args}>
      <p>Hello</p>
    </CardComponent>
  </Theme>
);

export const Card = CardTemplate.bind({});
Card.args = {};
