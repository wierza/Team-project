/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareProducts = ({ products }) =>
  products.filter(product => product.compare);

/* actions */
const createActionName = actionName => `app/lists/${actionName}`;

const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');

/* action creators */
export const toggleCompare = payload => ({
  type: TOGGLE_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );

    default:
      return statePart;
  }
}
