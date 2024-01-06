import React, {useEffect, useState} from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F0F0F0',
  },
  text: {color: 'white'},
  textPressed: {
    color: 'blue',
  },
});
export default function PressableDemo() {
  return (
    <View style={styles.root}>
      <Pressable
        style={state => {
          const {pressed} = state;
          return {
            width: 300,
            height: 65,
            backgroundColor: pressed ? 'white' : '#2030FF',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          };
        }}>
        {state => {
          const {pressed} = state;
          return (
            <Text style={pressed ? styles.textPressed : styles.text}>按钮</Text>
          );
        }}
      </Pressable>
    </View>
  );
}
