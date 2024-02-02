import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import MainLogoIcon from '../assets/icon_main_logo.png';
export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    mainLogo: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
      marginTop: -100,
    },
  });
  return (
    <View style={styles.root}>
      <Image source={MainLogoIcon} style={styles.mainLogo} />
    </View>
  );
};
