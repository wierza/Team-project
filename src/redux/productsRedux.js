/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const SET_USERS_STARS = createActionName('SET_USERS_STARS');

/* action creators*/
export const setUserStars = payload => ({ type: SET_USERS_STARS, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_USERS_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.value }
          : product
      );
    default:
      return statePart;
  }
}
