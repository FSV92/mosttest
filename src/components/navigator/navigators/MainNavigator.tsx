import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackNavigatorTypeList} from '../_navigatorTypes';

// экраны
import MainScreen from '../../screens/MainScreen';
import CartScreen from '../../screens/CartScreen';
import OrderScreen from '../../screens/OrderScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen';

import Header from '../../widgets/Header';
import {getHeaderTitle} from '@react-navigation/elements';

const MainStack = createNativeStackNavigator<MainStackNavigatorTypeList>();

const MainStackNavigator = () => (
  <MainStack.Navigator
    screenOptions={{
      header: ({navigation, route, options}) => {
        const title = getHeaderTitle(options, route.name);

        return <Header title={title} />;
      },
    }}>
    <MainStack.Screen
      name="MainScreen"
      component={MainScreen}
      options={{title: 'Главная'}}
    />
    <MainStack.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
      options={{title: ''}}
    />
    <MainStack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{title: 'Корзина'}}
    />
    <MainStack.Screen
      name="OrderScreen"
      component={OrderScreen}
      options={{title: 'Ваш заказ'}}
    />
  </MainStack.Navigator>
);

export default MainStackNavigator;
