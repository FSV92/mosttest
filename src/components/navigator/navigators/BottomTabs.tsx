import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import {BottomTabsTypeList} from '../_navigatorTypes';

// навигаторы
import ProfileStackNavigator from './ProfileNavigator';
import MainStackNavigator from './MainNavigator';

const BottomTab = createBottomTabNavigator<BottomTabsTypeList>();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Главная',
        }}
      />
      <BottomTab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Профиль',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
