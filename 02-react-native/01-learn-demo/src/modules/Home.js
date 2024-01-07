import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
} from 'react-native';
import IconAdd from '../assets/images/icon_add.png';
import AddAccountModal from '../components/AddAccountModal';
import {getStorage, removeStorage} from '../utils/storage';

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
    zIndex: 10,
  },
  iconAdd: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
  groupHeader: {
    width: '100%',
    height: 46,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 12,
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
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    getStorage('accountList').then(res => {
      const accountResultList = res ? JSON.parse(res) : [];
      const resultObjList = [];
      accountResultList.forEach(item => {
        if (!resultObjList[item.tabIndex]) {
          resultObjList[item.tabIndex] = {data: [], name: item.tabType};
        }
        resultObjList[item.tabIndex].data.push(item);
      });
      setAccountList(resultObjList);
    });
  }, []);

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View>
        <Text>111</Text>
      </View>
    );
  };

  const renderSectionHeader = ({section}) => {
    return (
      <View style={styles.groupHeader}>
        <Text>{section.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {renderTitle()}
      <TouchableOpacity
        onPress={() => {
          addCountModalRef.current.show();
        }}
        style={styles.addBtn}
        activeOpacity={0.5}>
        <Image style={styles.iconAdd} source={IconAdd}></Image>
      </TouchableOpacity>
      <SectionList
        sections={accountList}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderItem}></SectionList>
      <AddAccountModal ref={addCountModalRef}></AddAccountModal>
    </View>
  );
};
