import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// навигаторы
import AuthStackNavigator from './navigators/AuthNavigator';
import BottomTabs from './navigators/BottomTabs';

type propsTypes = {
  isAuth: boolean;
};

const AppNavigator = (props: propsTypes) => {
  const {isAuth} = props;

  const RootStackNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isAuth ? (
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
