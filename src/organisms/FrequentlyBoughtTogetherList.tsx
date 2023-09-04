import React, { useState } from 'react';

import { Flex } from '@radix-ui/themes';

import ShoppingSummaryCard from '../molecules/ShoppingSummaryCard';
import ProductCard from '../molecules/ProductCard';

export interface Product {
  id: number;
  image: string;
  sku: string;
  title: string;
  price: string;
  stock: number;
}

export interface FrequentlyBoughtTogetherListProps {
  products: Product[];
}

const FrequentlyBoughtTogetherListComponent: React.FC<FrequentlyBoughtTogetherListProps> = ({ products }) => {
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateList = (product: Product, isSelected: boolean) => {
    const uniqueItems = new Set(selectedItems);
    if (isSelected) uniqueItems.add(product);
    else uniqueItems.delete(product);

    const selectionUpdate = [...uniqueItems];
    setSelectedItems(selectionUpdate);
    calcAndUpdateTotalPrice(selectionUpdate);
  };

  const calcAndUpdateTotalPrice = (items: Product[]) => {
    const total = items.reduce((calculatedTotal, { price }) => calculatedTotal + Number(price), 0);

    setTotalPrice(total);
  };

  const addToBasket = () => {
    const skus = selectedItems.map(({ sku }) => sku);

    console.log('Add to basket', skus.join());
  };

  return (
    <Flex className='FBT-List'>
      <ShoppingSummaryCard
        title='Frequently bought together'
        desc='Please ensure you read the label of all products purchased as part of this bundle before use.'
        itemsCount={selectedItems.length}
        totalPrice={totalPrice}
        onAddBtnClick={addToBasket}
      />

      <Flex gap={'5'}>
        {products.map((product) => (
          <ProductCard
            name={product.title}
            price={product.price}
            imgSrc={product.image}
            onSelected={(isSelected: boolean) => updateList(product, isSelected)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default FrequentlyBoughtTogetherListComponent;
