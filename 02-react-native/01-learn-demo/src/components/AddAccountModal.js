import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import IconClose from '../assets/images/icon_close_modal.png';
import {getUUid} from '../utils/uuid';
import {getStorage, saveStorage} from '../utils/storage';
import {typesArray} from '../utils/constants';
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  subTitleTxt: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10,
  },
});
export default forwardRef(function AddAccountModal(props, ref) {
  const [modalVisible, setModalVisible] = useState(false); // 控制模态框显示的变量
  const [tabIndex, setTabIndex] = useState(0);
  const [accountName, setAccountName] = useState('');
  const [accountCode, setAccountCode] = useState('');
  const [accountPassword, setAccountPassword] = useState('');
  const [id, setId] = useState(0);
  const [isModify, setIsModify] = useState(false);

  const show = currentAccount => {
    if (currentAccount) {
      setIsModify(true);
      setId(currentAccount.id);
      setTabIndex(currentAccount.tabIndex);
      setAccountName(currentAccount.name);
      setAccountCode(currentAccount.account);
      setAccountPassword(currentAccount.password);
    } else {
      setId(getUUid);
      setIsModify(false);
    }
    setModalVisible(true);
  };
  const hide = () => {
    setModalVisible(false);
  };
  const {onSave} = props;
  // 将方法和属性暴露给父组件
  useImperativeHandle(ref, () => {
    return {
      show,
      hide,
    };
  });
  const renderTitle = () => {
    const titleStyles = StyleSheet.create({
      layout: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      closeBtn: {
        position: 'absolute',
        right: 6,
      },
      iconClose: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
      },
    });
    return (
      <View style={titleStyles.layout}>
        <Text style={titleStyles.titleText}>
          {isModify ? '编辑账号' : '添加账号'}
        </Text>
        <TouchableOpacity onPress={hide} style={titleStyles.closeBtn}>
          <Image style={titleStyles.iconClose} source={IconClose} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderType = () => {
    const typeStyles = StyleSheet.create({
      typesLayout: {
        width: '100%',
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      },
      tabItem: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeTab: {
        backgroundColor: '#007AFF',
      },
      leftTab: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c0c0c0',
      },
      middleTab: {
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c0c0c0',
      },
      rightTab: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderColor: '#c0c0c0',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
      tabText: {
        fontSize: 14,
        color: '#666',
      },
      activeText: {
        color: 'white',
      },
    });
    return (
      <View style={typeStyles.typesLayout}>
        {typesArray.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setTabIndex(index)}
              key={index}
              style={[
                typeStyles.tabItem,
                index === 0 ? typeStyles.leftTab : '',
                index === typesArray.length - 1 ? typeStyles.rightTab : '',
                index !== 0 && index !== typesArray.length - 1
                  ? typeStyles.middleTab
                  : '',
                index === tabIndex ? typeStyles.activeTab : '',
              ]}>
              <Text
                style={[
                  typeStyles.tabText,
                  tabIndex === index ? typeStyles.activeText : '',
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderName = () => {
    const nameStyles = StyleSheet.create({
      textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
      },
    });
    return (
      <TextInput
        maxLength={20}
        value={accountName}
        onChangeText={text => {
          setAccountName(text || '');
        }}
        placeholder="请输入账户名称"
        style={nameStyles.textInput}
      />
    );
  };

  const renderAccount = () => {
    const nameStyles = StyleSheet.create({
      textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
      },
    });
    return (
      <TextInput
        maxLength={20}
        value={accountCode}
        onChangeText={text => {
          setAccountCode(text || '');
        }}
        placeholder="请输入账号"
        style={nameStyles.textInput}
      />
    );
  };

  const renderPassword = () => {
    const nameStyles = StyleSheet.create({
      textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
      },
    });
    return (
      <TextInput
        maxLength={20}
        value={accountPassword}
        onChangeText={text => {
          setAccountPassword(text || '');
        }}
        placeholder="请输入密码"
        style={nameStyles.textInput}
      />
    );
  };

  const renderButton = () => {
    const styles = StyleSheet.create({
      button: {
        width: '100%',
        height: 40,
        backgroundColor: '#3050ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8,
      },
      saveText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
    });
    const handleSaveAccount = () => {
      const newAccount = {
        id: id,
        tabIndex: tabIndex,
        tabType: typesArray[tabIndex],
        name: accountName,
        account: accountCode,
        password: accountPassword,
      };
      getStorage('accountList').then(result => {
        let newAccountList = result ? JSON.parse(result) : [];
        // 如果是编辑，就需要在保存前，先移除那个
        if (isModify) {
          newAccountList = newAccountList.map(item => {
            if (item.id === id) {
              return newAccount;
            }
            return item;
          });
        } else {
          newAccountList.push(newAccount);
        }
        saveStorage('accountList', JSON.stringify(newAccountList)).then(() => {
          console.log('操作成功');
          hide();
          onSave();
        });
      });
    };
    return (
      <TouchableOpacity style={styles.button} onPress={handleSaveAccount}>
        <Text style={styles.saveText}>保存</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      statusBarTranslucent={true}
      visible={modalVisible}
      onRequestClose={hide}
      animationType="fade"
      transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.root}>
        <View style={styles.content}>
          {renderTitle()}
          <Text style={styles.subTitleTxt}>账号类型</Text>
          {renderType()}
          <Text style={styles.subTitleTxt}>账号名称</Text>
          {renderName()}
          <Text style={styles.subTitleTxt}>账号</Text>
          {renderAccount()}
          <Text style={styles.subTitleTxt}>密码</Text>
          {renderPassword()}
          {renderButton()}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
});
