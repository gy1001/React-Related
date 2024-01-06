import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Text} from 'react-native';

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
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <Text style={styles.txt}>点击我</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
