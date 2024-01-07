import React, {useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import IconAdd from '../assets/images/icon_add.png';
import AddAccountModal from '../components/AddAccountModal';

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
  addBtn: {
    position: 'absolute',
    bottom: 64,
    right: 28,
  },
  iconAdd: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
});
export default () => {
  const renderTitle = () => {
    // 这里应该返回一个标题组件
    return (
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>账号管理</Text>
      </View>
    );
  };
  const addCountModalRef = useRef(null);
  return (
    <View style={styles.root}>
      {renderTitle()}
      <TouchableOpacity
        onPress={() => addCountModalRef.current.show()}
        style={styles.addBtn}
        activeOpacity={0.5}>
        <Image style={styles.iconAdd} source={IconAdd}></Image>
      </TouchableOpacity>
      <AddAccountModal ref={addCountModalRef}></AddAccountModal>
    </View>
  );
};
