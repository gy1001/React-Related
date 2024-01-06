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
    marginTop: 100,
  },
});

export default function Anim1Demo() {
  const scale = useRef(new Animated.Value(1)).current;

  const onPress = () => {
    Animated.timing(scale, {
      toValue: 2.5,
      duration: 1000,
      // 是否启用原生驱动
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      Animated.timing(scale, {
        toValue: 0.5,
        duration: 1000,
        // 是否启用原生驱动
        useNativeDriver: false,
      }).start();
    }, 3000);
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
              {
                scale: scale,
              },
            ],
          },
        ]}
      />
    </View>
  );
}
