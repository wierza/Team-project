/* selectors */
export const getAll = ({ products }) => products;
export const getProductByCategory = ({ products }, category) => {
  return products.filter(product => product.category === category);
};

export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
