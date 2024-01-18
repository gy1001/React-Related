import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AvatarIcon from '../assets/images/default_avatar.png';
import {ThemeContext} from '../context/ThemeContext';

export default () => {
  const lightStyles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      paddingTop: 50,
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 20,
    },
    desc: {
      width: '80%',
      backgroundColor: '#DEB887',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 20,
      borderRadius: 10,
      color: '#fff',
    },
  });
  const darkStyles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      paddingTop: 50,
      backgroundColor: '#333',
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 20,
      color: 'white',
    },
    desc: {
      width: '80%',
      backgroundColor: '#999',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 20,
      borderRadius: 10,
      color: '#fff',
    },
  });
  const theme = useContext(ThemeContext);
  const styles = theme === 'dark' ? darkStyles : lightStyles;
  return (
    <View style={styles.root}>
      <Image source={AvatarIcon} style={styles.img}></Image>
      <Text style={styles.title}>个人信息介绍</Text>
      <Text style={styles.desc}>
        各位产品经理大家好，我是个人开发者，我学习 RN
        两年半了，我喜欢安卓、RN、鸿蒙。
      </Text>
    </View>
  );
};
