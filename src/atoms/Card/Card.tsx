import React, { ReactNode } from 'react';
import { Card } from '@radix-ui/themes';

export interface CardProps {
  children: ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return (
    <Card asChild style={{ maxWidth: 200, height: 270 }} variant='surface'>
      {children}
    </Card>
  );
};

export default CardComponent;
