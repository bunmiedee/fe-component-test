import React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';
import { formatCurrency } from '../helpers/locale';

import '../styles/global.css';

export interface ProductCardProps {
  title: string;
  desc: string;
  itemsCount: number;
  totalPrice: number;
  onAddBtnClick: () => void;
}

const ShoppingSummaryCardComponent: React.FC<ProductCardProps> = ({
  title,
  desc,
  itemsCount,
  totalPrice,
  onAddBtnClick,
}) => {
  return (
    <Flex direction={'column'} style={{ maxWidth: 280, marginRight: 25 }}>
      <Box>
        <Text as='div' size='4' weight='bold'>
          {title}
        </Text>

        <Text as='div' size='2'>
          {desc}
        </Text>
      </Box>

      <Box style={{ marginTop: 20 }}>
        <Text as='div' size='3' weight='bold'>
          Total Price: {formatCurrency(totalPrice)}
        </Text>

        <button className='Button' onClick={onAddBtnClick}>
          Add {itemsCount} item{itemsCount > 1 ? 's' : ''} to basket
        </button>
      </Box>
    </Flex>
  );
};

export default ShoppingSummaryCardComponent;
