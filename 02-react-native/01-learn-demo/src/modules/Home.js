import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
  LayoutAnimation,
  Alert,
  Switch,
} from 'react-native';
import IconAdd from '../assets/images/icon_add.png';
import AddAccountModal from '../components/AddAccountModal';
import {getStorage, saveStorage} from '../utils/storage';
import IconGame from '../assets/images/icon_game.png';
import IconPlatform from '../assets/images/icon_platform.png';
import IconOther from '../assets/images/icon_other.png';
import IconBank from '../assets/images/icon_bank.png';
import IconArrow from '../assets/images/icon_arrow.png';
import {typesArray} from '../utils/constants';

const ImageIconObj = {
  0: IconGame,
  1: IconPlatform,
  2: IconBank,
  3: IconOther,
};

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
    flexDirection: 'row',
  },
  titleTxt: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  switch: {
    position: 'absolute',
    right: 20,
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
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});

export default () => {
  const renderTitle = () => {
    // 这里应该返回一个标题组件
    return (
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>账号管理</Text>
        <Switch
          style={styles.switch}
          value={passwordVisible}
          onValueChange={value => setPasswordVisible(value)}
        />
      </View>
    );
  };
  const addCountModalRef = useRef(null);
  const [accountList, setAccountList] = useState([]);
  const [sectionState, setSectionState] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getStorage('accountList').then(res => {
      const accountResultList = res ? JSON.parse(res) : [];
      const resultObjList = Array.from(
        {length: typesArray.length},
        (el, index) => ({
          data: [],
          name: typesArray[index],
          index: index,
        }),
      );
      accountResultList.forEach(item => {
        resultObjList[item.tabIndex].data.push(item);
      });
      LayoutAnimation.easeInEaseOut();
      setAccountList(resultObjList);
    });
  };

  const deleteAccount = account => {
    getStorage('accountList').then(res => {
      let accountResultList = res ? JSON.parse(res) : [];
      accountResultList = accountResultList.filter(
        item => item.id !== account.id,
      );
      saveStorage('accountList', JSON.stringify(accountResultList)).then(() => {
        console.log('删除成功');
        loadData();
      });
    });
  };

  const renderItem = ({item, index, section}) => {
    if (!sectionState[section.index]) {
      return null;
    }
    const itemStyles = StyleSheet.create({
      layout: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
      },
      layoutActive: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      text: {
        fontSize: 16,
        color: '#333',
      },
      accPwdLayout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 6,
      },
      accPwdText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
      },
    });
    const buttons = [
      {
        text: '取消',
        onPress: () => {},
      },
      {
        text: '确定',
        onPress: () => deleteAccount(item),
      },
    ];
    return (
      <TouchableOpacity
        onPress={() => {
          addCountModalRef.current.show(item);
        }}
        onLongPress={() => {
          Alert.alert('提示', `确定要删除账号『${item.name}』吗`, buttons);
        }}
        style={[
          itemStyles.layout,
          index === section.data.length - 1 ? itemStyles.layoutActive : '',
        ]}>
        <Text style={itemStyles.text}>{item.name}</Text>
        <View style={itemStyles.accPwdLayout}>
          <Text style={itemStyles.accPwdText}> 账号：{item.account}</Text>
          <Text style={itemStyles.accPwdText}>
            密码：{passwordVisible ? item.password : '********'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({section}) => {
    const headerStyles = StyleSheet.create({
      groupHeader: {
        width: '100%',
        height: 46,
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
      },
      headerActive: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
      },
      text: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
        marginLeft: 12,
      },
      arrowBtn: {
        position: 'absolute',
        right: 0,
        padding: 16,
      },
    });
    return (
      <View
        style={[
          headerStyles.groupHeader,
          sectionState[section.index] ? '' : headerStyles.headerActive,
        ]}>
        <Image
          style={headerStyles.icon}
          source={ImageIconObj[section.index]}></Image>
        <Text style={headerStyles.text}>{section.name}</Text>
        <TouchableOpacity
          style={headerStyles.arrowBtn}
          onPress={() => {
            const originSectionState = {...sectionState};
            setSectionState({
              ...originSectionState,
              [section.index]: !originSectionState[section.index],
            });
            // 自动执行动画:当布局变化时，自动将视图运动到它们新的位置上。
            LayoutAnimation.easeInEaseOut();
          }}>
          <Image
            style={[
              headerStyles.icon,
              {
                transform: [
                  {
                    rotate: sectionState[section.index] ? '0deg' : '-180deg',
                  },
                ],
              },
            ]}
            source={IconArrow}></Image>
        </TouchableOpacity>
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
        <Image style={styles.iconAdd} source={IconAdd} />
      </TouchableOpacity>
      <SectionList
        sections={accountList}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <AddAccountModal ref={addCountModalRef} onSave={loadData} />
    </View>
  );
};
