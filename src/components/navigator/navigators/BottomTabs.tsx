import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

import {BottomTabsTypeList} from '../_navigatorTypes';

// навигаторы
import ProfileStackNavigator from './ProfileNavigator';
import MainStackNavigator from './MainNavigator';

import Home from '../../../images/svg/home.svg';
import Profile from '../../../images/svg/profile.svg';

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
          tabBarIcon: ({color}) => (
            <Home width={22} height={22} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({color}) => (
            <Profile width={22} height={22} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
