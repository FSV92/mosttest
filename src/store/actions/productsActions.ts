import {
  GET_PRODUCTS,
  GET_CURRENT_PRODUCT,
  UPDATE_SKIP_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_OF_CATEGORY,
  SET_QUANTITY_CURRENT,
  SET_QUANTITY_CARD,
} from '../_constans';
import {IAction} from '../_types';

export const actionGetProducts = (payload: any): IAction => ({
  type: GET_PRODUCTS,
  payload,
});

export const actionGetCurrentProduct = (payload: any): IAction => ({
  type: GET_CURRENT_PRODUCT,
  payload,
});

export const actionUpdateSkip = (): IAction => ({
  type: UPDATE_SKIP_PRODUCTS,
});

export const actionGetCategories = (payload: any): IAction => ({
  type: GET_CATEGORIES,
  payload,
});

export const actionGetProductsOfCategory = (payload: any): IAction => ({
  type: GET_PRODUCTS_OF_CATEGORY,
  payload,
});

export const actionSetQuantityCurrent = (payload: any): IAction => ({
  type: SET_QUANTITY_CURRENT,
  payload,
});

export const actionSetQuantityCard = (
  value: number | string,
  productID: number | string | null,
): IAction => ({
  type: SET_QUANTITY_CARD,
  payload: {quantity: value, productID},
});

// export const actionGetProductsOfCategory = (payload: any): IAction => ({
//   type: GET_PRODUCTS_OF_CATEGORY,
//   payload,
// });

// export const actionGetProductsOfCategory = (payload: any): IAction => ({
//   type: GET_PRODUCTS_OF_CATEGORY,
//   payload,
// });
