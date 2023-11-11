import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackNavigatorTypeList} from '../_navigatorTypes';

// экраны
import MainScreen from '../../screens/MainScreen';
import CartScreen from '../../screens/CartScreen';
import OrderScreen from '../../screens/OrderScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen';

const MainStack = createNativeStackNavigator<MainStackNavigatorTypeList>();

const MainStackNavigator = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    <MainStack.Screen name="MainScreen" component={MainScreen} />
    <MainStack.Screen
      name="ProductDetailScreen"
      component={ProductDetailScreen}
    />
    <MainStack.Screen name="CartScreen" component={CartScreen} />
    <MainStack.Screen name="OrderScreen" component={OrderScreen} />
  </MainStack.Navigator>
);

export default MainStackNavigator;
