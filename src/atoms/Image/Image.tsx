import React, { ReactNode } from 'react';
import { Avatar } from '@radix-ui/themes';

export interface ImageProps {
  src: string;
  size?: any;
}

const ImageComponent: React.FC<ImageProps> = ({ src, size }) => {
  return <Avatar size={size ?? '9'} src={src} fallback='H+B' />;
};

export default ImageComponent;
