import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  titleLayout: {
    width: '100%',
    height: 46,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});
export default () => {
  const renderTitle = () => {
    return (
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>标题</Text>
      </View>
    ); // 这里应该返回一个标题组件
  };
  return <View style={styles.root}>{renderTitle()}</View>;
};
