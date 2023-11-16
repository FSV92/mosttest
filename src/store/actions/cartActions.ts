import {GET_CART, UPDATE_CART} from '../_constans';
import {IAction} from '../_types';

export const actionGetCart = (payload: any): IAction => ({
  type: GET_CART,
  payload: {
    id: payload.id,
    products: payload.products,
    totalProducts: payload.totalProducts,
    totalPrice: payload.total,
  },
});

export const actionUpdateCart = (payload: any): IAction => ({
  type: UPDATE_CART,
  payload: {
    id: payload.id,
    products: payload.products,
    totalProducts: payload.totalProducts,
    totalPrice: payload.total,
  },
});
