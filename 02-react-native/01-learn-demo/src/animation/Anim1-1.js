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
    // Animated.timing(marginLeft, {
    //   toValue: 200,
    //   duration: 1000,
    //   // 是否启用原生驱动
    //   useNativeDriver: false,
    // }).start();
    Animated.decay(marginLeft, {
      velocity: 1, // 初始速度
      deceleration: 0.997, // 减速系数，系数越大，速度变化越小，最后接近静止
      useNativeDriver: false,
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
