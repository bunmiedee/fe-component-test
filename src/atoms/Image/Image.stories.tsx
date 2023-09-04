import React from 'react';
import ImageComponent from './Image';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export default {
  title: 'Base Image',
  component: ImageComponent,
};

const ImageTemplate = (args: any) => (
  <Theme>
    <ImageComponent {...args} />
  </Theme>
);

export const Image = ImageTemplate.bind({});
Image.args = {
  src: 'https://images.hollandandbarrettimages.co.uk/productimages/HB/320/046901_A.jpg',
};
