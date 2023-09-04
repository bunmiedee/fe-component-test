const GBP = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

export const formatCurrency = (val: string | number) => GBP.format(Number(val));
