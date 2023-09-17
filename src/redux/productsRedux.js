// selectors
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductByImage = (state, imageToFind) => {
  const products = getAll(state);
  const foundProduct = products.find(product => product.image === imageToFind);
  return foundProduct;
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
