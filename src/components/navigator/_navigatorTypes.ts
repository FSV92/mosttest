import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ICurrentProduct} from '../../store/_types';

export type BottomTabsTypeList = {
  MainStackNavigator: undefined;
  ProfileStackNavigator: undefined;
};

export type AuthStackNavigatorTypeList = {
  AuthScreen: {screen: string};
};

export type MainStackNavigatorTypeList = {
  MainScreen: undefined;
  ProductDetailScreen: {currentProduct: ICurrentProduct};
  CartScreen: undefined;
  OrderScreen: undefined;
};

export type ProfileStackNavigatorTypeList = {
  ProfileScreen: undefined;
};

export interface IRoutes {
  route?: {
    params?: {
      id?: number;
      currentProduct?: ICurrentProduct;
    };
  };
}

export type MainStackNavigatorTypeListProp =
  NativeStackNavigationProp<MainStackNavigatorTypeList>;
