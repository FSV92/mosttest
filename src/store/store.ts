import thunk from 'redux-thunk';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './reducers/authReducer';
import {productsReducer} from './reducers/productsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
};

export const store = setupStore();

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType['dispatch'];
