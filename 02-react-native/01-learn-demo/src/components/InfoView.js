import React from 'react';
import {View, Text, Button} from 'react-native';
import MemoDemo from './MemoDemo';

export default () => {
  const [infoState, setInfoState] = React.useState({});
  const handleClick = () => {
    setInfoState({name: '张三', age: 18, gender: '男性'});
  };
  return (
    <View>
      <Text>Hello World</Text>
      <Button onPress={handleClick} title="点击我"></Button>
      <MemoDemo info={infoState}></MemoDemo>
    </View>
  );
};
