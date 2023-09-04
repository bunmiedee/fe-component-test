import React, { useEffect, Suspense, useState } from 'react';
import FrequentlyBoughtTogetherList, { Product } from '../src/organisms/FrequentlyBoughtTogetherList';

import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import './bundles.css';

const Loading = () => {
  return <h2>Loading...</h2>;
};

export const Bundles = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const filterAndUpdateBundles = (productList: Product[]) => {
    // show only prods in stock
    const productsInStock = productList.filter(({ stock }) => stock > 0);
    setProducts(productsInStock);
  };

  useEffect(() => {
    fetch(`https://hb.demo/products`)
      .then((response) => response.json())
      .then((json) => filterAndUpdateBundles(json?.data.products))
      .catch(() => {
        console.log('error loading url');
      });
  }, []);

  return (
    <Theme>
      <Suspense fallback={<Loading />}>
        <FrequentlyBoughtTogetherList products={products} />
      </Suspense>
    </Theme>
  );
};
