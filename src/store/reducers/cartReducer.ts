import {GET_CART, UPDATE_CART} from '../_constans';
import {ICartState, IAction} from '../_types';

const defaultState: ICartState = {
  id: null,
  products: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const cartReducer = (
  state = defaultState,
  action: IAction,
): ICartState => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        id: action.payload.id,
        products: action.payload.products,
        totalProducts: action.payload.totalProducts,
        totalPrice: action.payload.totalPrice,
      };
    case UPDATE_CART:
      return {
        ...state,
        id: action.payload.id,
        products: action.payload.products,
        totalProducts: action.payload.totalProducts,
        totalPrice: action.payload.totalPrice,
      };
    // case AUTH_USER:
    //   return {
    //     ...state,
    //     isAuth: action.payload.isAuth,
    //     user: action.payload.user,
    //   };
    default:
      return state;
  }
};
