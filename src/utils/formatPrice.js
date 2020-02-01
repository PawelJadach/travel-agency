const formatPrice = price => {
  
  const newPrice = typeof(price) != 'number'
    ? price
    : Math.ceil(price)
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    //console.log(newPrice, price)
  return newPrice;
};

export default formatPrice;
