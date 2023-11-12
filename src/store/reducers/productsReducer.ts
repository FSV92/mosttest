import {
  GET_PRODUCTS,
  GET_CURRENT_PRODUCT,
  UPDATE_SKIP_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_OF_CATEGORY,
  DECREMENT,
  INCREMENT,
  SET_QUANTITY_CURRENT,
  SET_QUANTITY_CARD,
} from '../_constans';
import {IAuthState, IAction, IProductsState} from '../_types';

export const defaultState: IProductsState = {
  products: [],
  currentProduct: {
    id: null,
    title: '',
    description: '',
    price: null,
    brand: '',
    category: '',
    thumbnail: '',
    quantity: 1,
    images: [],
  },
  limitProducts: 10,
  skipProducts: 0,
  categories: [],
};

export const productsReducer = (
  state = defaultState,
  action: IAction,
): IProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case UPDATE_SKIP_PRODUCTS:
      return {
        ...state,
        skipProducts: state.skipProducts + defaultState.limitProducts,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS_OF_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case GET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: {...action.payload, quantity: 1},
      };
    case SET_QUANTITY_CURRENT:
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          quantity: action.payload,
        },
      };
    case SET_QUANTITY_CARD:
      const updatedProducts = state.products.map(prod => {
        if (prod.id == action.payload.productID) {
          console.log('prod', prod);

          return {
            ...prod,
            quantity: action.payload.quantity,
          };
        }
      });

      // console.log('foundProduct', foundProduct?.id);

      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};
