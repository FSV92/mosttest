import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorTypeList} from '../_navigatorTypes';

// экраны
import AuthScreen from '../../screens/AuthScreen';

const AuthStack = createNativeStackNavigator<AuthStackNavigatorTypeList>();
const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
