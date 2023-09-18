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
/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_FAV = createActionName('TOGGLE_FAV');

/* action creators*/
export const toggleFavourite = payload => ({ type: TOGGLE_FAV, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAV:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    default:
      return statePart;
  }
}
