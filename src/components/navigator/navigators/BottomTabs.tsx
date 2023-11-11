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
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
      />
      <BottomTab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
