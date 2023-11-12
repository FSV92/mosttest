import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type BottomTabsTypeList = {
  MainStackNavigator: undefined;
  ProfileStackNavigator: undefined;
};

export type AuthStackNavigatorTypeList = {
  AuthScreen: {screen: string};
};

export type MainStackNavigatorTypeList = {
  MainScreen: undefined;
  ProductDetailScreen: {id: number | string};
  CartScreen: undefined;
  OrderScreen: undefined;
};

export type ProfileStackNavigatorTypeList = {
  ProfileScreen: undefined;
};

export interface IRoutes {
  route: {
    params: {
      id?: number;
    };
  };
}

export type MainStackNavigatorTypeListProp =
  NativeStackNavigationProp<MainStackNavigatorTypeList>;
