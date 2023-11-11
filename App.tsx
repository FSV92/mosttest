import React, {useCallback, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './src/components/navigator/AppNavigator';
import {actionAuthUser} from './src/store/actions/authActions';
import {setupStore} from './src/store/store';

const store = setupStore();

// проверка авторизован ли пользователь
const checkSavedUser = async () => {
  // await AsyncStorage.removeItem('@savedUser');

  const savedUser = await AsyncStorage.getItem('@savedUser').then(json =>
    json ? JSON.parse(json) : null,
  );

  if (savedUser) {
    store.dispatch(actionAuthUser(savedUser, true));
  } else {
    store.dispatch(actionAuthUser({}, false));
    console.log('нет сохраненного пользователя');
  }
};

function App(): JSX.Element {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await checkSavedUser();
        // Искусственная задержка
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <KeyboardAvoidingView
        enabled
        style={{
          flex: 1,
          width: '100%',
        }}
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: StatusBar.currentHeight || 0,
        })}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
