import React from 'react';
import ShoppingSummaryCardComponent from './ShoppingSummaryCard';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default {
  title: 'ShoppingSummary',
  component: ShoppingSummaryCardComponent,
};

const ShoppingSummaryCardTemplate = (args: any) => (
  <Theme>
    <ShoppingSummaryCardComponent {...args} />
  </Theme>
);

export const ShoppingSummaryCard = ShoppingSummaryCardTemplate.bind({});
ShoppingSummaryCard.args = {
  title: 'Frequently bought together',
  desc: 'Please ensure you read the label of all products purchased as part of this bundle before use.',
  itemsCount: 3,
  totalPrice: 23.97,
};
