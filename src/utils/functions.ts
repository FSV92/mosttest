import {ThunkDispatch} from 'redux-thunk';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as links from './links';
import {actionGetUsers, actionAuthUser} from '../store/actions/authActions';
import {
  actionGetProducts,
  actionGetCurrentProduct,
  actionUpdateSkip,
  actionGetCategories,
  actionGetProductsOfCategory,
} from '../store/actions/productsActions';
import {actionGetCart, actionUpdateCart} from '../store/actions/cartActions';
import {RootStateType} from '../store/store';
import {defaultState} from '../store/reducers/productsReducer';
import {store} from '../store/store';
import {IAction, ICurrentProduct} from '../store/_types';

export const getUsers = () => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getUsers, {params: {limit: 10}})
      .then(response => {
        dispatch(actionGetUsers(response.data.users));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const authUsers = (username: string, password: string) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .post(
        links.authUser,
        {
          username,
          password,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      )
      .then(response => {
        if (response.status == 200) {
          dispatch(actionAuthUser(response.data, true));

          AsyncStorage.setItem('@savedUser', JSON.stringify(response.data));
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};

export const getProducts = () => {
  const productsStore = store.getState().products;

  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getProducts, {
        params: {
          limit: defaultState.limitProducts,
          skip: productsStore.skipProducts,
        },
      })
      .then(response => {
        dispatch(actionGetProducts(response.data.products));
        dispatch(actionUpdateSkip());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getCurrentProduct = (id: string | number | undefined) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getCurrentProduct(id))
      .then(response => {
        dispatch(actionGetCurrentProduct(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getCategories = (id: string | number | undefined) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getCategories)
      .then(response => {
        dispatch(actionGetCategories(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getProductsOfCategory = (category: string | undefined) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getProductsOfCategory(category))
      .then(response => {
        dispatch(actionGetProductsOfCategory(response.data.products));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getCart = (id: string | number | undefined) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .get(links.getCart(id))
      .then(response => {
        dispatch(actionGetCart(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateCart = (
  id: string | number | undefined,
  newArray: ICurrentProduct[] | [],
) => {
  return (dispatch: ThunkDispatch<RootStateType, unknown, IAction>) => {
    axios
      .put(
        links.updateCart(id),
        {
          products: newArray,
        },
        {
          headers: {'Content-Type': 'application/json'},
        },
      )
      .then(response => {
        dispatch(actionUpdateCart(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
