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
  const marginTop = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const onPress = () => {
    const moveX = Animated.timing(marginLeft, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    });
    const moveY = Animated.timing(marginTop, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    });
    const scaleAnim = Animated.timing(scale, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: false,
    });
    // 并发
    // Animated.parallel([moveX, moveY, scaleAnim]).start();
    // 序列
    // Animated.sequence([moveX, moveY, scaleAnim]).start();
    // 间隔
    // Animated.stagger(1500, [moveX, moveY, scaleAnim]).start();
    // 延迟
    Animated.sequence([
      moveX,
      Animated.delay(1000),
      moveY,
      Animated.delay(1000),
      scaleAnim,
    ]).start();
  };

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress} />
      {/* Animated.View 在布局上就可以当做 View */}
      <Animated.View
        style={[
          styles.view1,
          {
            transform: [
              {scale: scale},
              {translateY: marginTop},
              {translateX: marginLeft},
            ],
          },
        ]}
      />
    </View>
  );
}
