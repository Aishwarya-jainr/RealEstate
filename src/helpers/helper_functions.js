const priceFormat = (price) => {
  return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { priceFormat };
