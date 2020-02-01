export const promoPrice = (price, promo) => {
  if(!price || !promo || price[0] !== '$') return null;
  let newPrice = price.slice(1);
  newPrice = Number(newPrice.replace(',', ''));
  if(typeof newPrice !== 'number') return null;
  newPrice = Round(newPrice * ((100-promo)/100), 2);
  return `$${newPrice}`;
};


function Round(n, k)
{
  var factor = Math.pow(10, k);
  return Math.round(n*factor)/factor;
}