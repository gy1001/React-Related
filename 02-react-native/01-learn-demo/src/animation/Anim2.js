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
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateValue = rotate.interpolate({
    inputRange: [0, 30],
    outputRange: ['0deg', '30deg'],
  });
  const onPress = () => {
    Animated.timing(rotate, {
      toValue: 30,
      duration: 1000,
      // 是否启用原生驱动
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
      {/* Animated.View 在布局上就可以当做 View */}
      <Animated.View
        style={[styles.view1, {transform: [{rotate: rotateValue}]}]}
      />
    </View>
  );
}
