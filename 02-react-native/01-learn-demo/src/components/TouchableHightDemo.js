import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F0F0F0',
  },
  button: {
    width: 300,
    height: 65,
    backgroundColor: '#2030FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default function TouchableOpacityDemo(props) {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        activeOpacity={0.4}
        style={styles.button}
        underlayColor="#00bcd4"
        onPress={() => {
          console.log('onPress');
        }}
        onLongPress={() => {
          console.log('onLongPress');
        }}
        delayLongPress={1000}
        onPressIn={() => {
          console.log('onPressIn');
        }}
        onPressOut={() => {
          console.log('onPressOut');
        }}>
        <Text style={styles.txt}>点击我</Text>
      </TouchableHighlight>
    </View>
  );
}
