import React from 'react';
import Card from '../atoms/Card/Card';
import Image from '../atoms/Image/Image';
import { Flex, Box, Text, Checkbox } from '@radix-ui/themes';
import { formatCurrency } from '../helpers/locale';

export interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: string;
  onSelected?: (val: boolean) => void;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ imgSrc, name, price, onSelected }) => {
  return (
    <Card>
      <Flex gap='5' align='center'>
        <Box position={'absolute'} right={'0'} className='Cb-Wrapper'>
          <Checkbox color='green' size={'2'} onCheckedChange={onSelected} />
        </Box>
        <Image src={imgSrc} />
        <Box>
          <Text as='div' size='2' weight='bold'>
            {name}
          </Text>
          <Text as='div' size='2' color='gray'>
            {formatCurrency(price)}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default ProductCardComponent;
