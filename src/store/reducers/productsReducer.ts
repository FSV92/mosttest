import {
  GET_PRODUCTS,
  GET_CURRENT_PRODUCT,
  UPDATE_SKIP_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_OF_CATEGORY,
} from '../_constans';
import {IAuthState, IAction, IProductsState} from '../_types';

export const defaultState: IProductsState = {
  products: [],
  currentProduct: {
    id: null,
    title: 'string',
    description: 'string',
    price: null,
    brand: 'string',
    category: 'string',
    thumbnail: 'string',
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
  // console.log('productsReducer', state.skipProducts, state.limitProducts);
  switch (action.type) {
    case GET_PRODUCTS:
      // return {...state, products: action.payload};
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
        currentProduct: action.payload,
      };
    default:
      return state;
  }
};
