import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import PageView from './PageView';
import {ThemeContext} from '../context/ThemeContext';
export default () => {
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
    },
    btnView: {
      with: '100%',
      alignItems: 'center',
      marginTop: 20,
      position: 'absolute',
      top: 0,
      left: 20,
      zIndex: 10,
    },
  });
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); // 切换主题
  };
  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.root}>
        <View style={styles.btnView}>
          <Button onPress={toggleTheme} title="切换主题"></Button>
        </View>
        <PageView></PageView>
      </View>
    </ThemeContext.Provider>
  );
};
