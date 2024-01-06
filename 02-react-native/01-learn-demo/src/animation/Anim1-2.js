import React, {useRef} from 'react';
import {Button, View, StyleSheet, Animated} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    marginTop: 10,
  },
});

export default function Anim1Demo() {
  const marginLeft = useRef(new Animated.Value(0)).current;
  const onPress = () => {
    Animated.spring(marginLeft, {
      toValue: 200,
      useNativeDriver: false,
      // 第一组配置
      // bounciness: 10,
      // speed: 28,
      // 第二组配置
      // tension: 10,
      // friction: 5,
      // 第三组配置
      stiffness: 20,
      damping: 40,
      mass: 10,
    }).start();
  };

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
      {/* Animated.View 在布局上就可以当做 View */}
      <Animated.View style={[styles.view1, {marginLeft: marginLeft}]} />
    </View>
  );
}
