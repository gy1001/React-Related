import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: 200,
    height: 300,
    backgroundColor: 'red',
  },
});

export default function ButtonDemo() {
  return (
    <View style={styles.root}>
      <Button
        style={styles.button} // 并不能生效
        title="按钮"
        color={'green'}
        onPress={() => {
          console.log('onPress');
        }}
        disabled={false}
      />
    </View>
  );
}
