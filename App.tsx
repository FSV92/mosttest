import React, {useCallback, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import AppNavigator from './src/components/navigator/AppNavigator';

function App(): JSX.Element {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();

    setTimeout(() => {
      setisAuth(true);
    }, 3000);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
    }
  }, [appIsReady]);

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
        <AppNavigator isAuth={isAuth} />
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
