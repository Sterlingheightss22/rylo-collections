module.exports = (products) => {
  return products.map(p => `{
    id: "${p.fileSlug}",
    brand: "${p.data.brand}",
    name: "${p.data.name}",
    price: ${p.data.price},
    cat: "${p.data.category}",
    img: "${p.data.image}",
    badge: "${p.data.badge || ''}",
    sale: ${p.data.sale || false}
  }`).join(',\n');
};
