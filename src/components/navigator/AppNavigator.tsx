import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {useAppSelector} from '../../store/hooks/redux';

// навигаторы
import AuthStackNavigator from './navigators/AuthNavigator';
import BottomTabs from './navigators/BottomTabs';

type propsTypes = {};

const AppNavigator = () => {
  const authStore = useAppSelector(state => state.auth);

  const RootStackNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!authStore.isAuth ? (
          <RootStackNavigator.Screen
            name="AuthStackNavigator"
            component={AuthStackNavigator}
          />
        ) : (
          <RootStackNavigator.Screen name="BottomTabs" component={BottomTabs} />
        )}
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
