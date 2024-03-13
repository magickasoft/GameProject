/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';
import {Text, StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  console.log('loading:: ', loading);

  return (
    <WebView
      style={styles.container}
      useWebKit
      source={{uri: 'https://magickasoft.github.io/event-app/'}}
      onNavigationStateChange={console.log}
      onLoadEnd={() => setLoading(false)}
    />
  );
}

export default App;
