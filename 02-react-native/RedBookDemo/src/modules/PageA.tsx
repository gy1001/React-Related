import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const myHandler = () => {
    // if (na`vigation.canGoBack) {
    //   navigation.goBack();
    // }
    navigation.push('PageB1');
    // navigation.replace('PageB1');
  };
  return (
    <View>
      <Text>Page A</Text>
      <Button title="点击跳转" onPress={myHandler} />
    </View>
  );
};
