import thunk from 'redux-thunk';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './reducers/authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
};

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType['dispatch'];
