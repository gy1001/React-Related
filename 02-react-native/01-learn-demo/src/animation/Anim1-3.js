import React, {useRef} from 'react';
import {Button, View, StyleSheet, Animated, Easing} from 'react-native';

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
    Animated.timing(marginLeft, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
      // easing: Easing.elastic(3),
      // easing: Easing.cubic,
      // easing: Easing.exp,
      // easing: Easing.sin,
      // easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      // easing: Easing.in(Easing.bounce),
      // easing: Easing.inOut(Easing.elastic(3)),
      easing: Easing.out(Easing.exp),
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
