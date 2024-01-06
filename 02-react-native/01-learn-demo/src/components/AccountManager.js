import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Home from '../modules/Home';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
});
export default function AccountManager() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        darkStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home />
    </SafeAreaView>
  );
}
