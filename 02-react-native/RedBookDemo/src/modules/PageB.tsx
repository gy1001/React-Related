import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import MainLogoIcon from '../assets/icon_main_logo.png';
import SelectIcon from '../assets/icon_selected.png';
import UnSelectIcon from '../assets/icon_unselected.png';
import IconArrow from '../assets/icon_arrow.png';
import IconWeixin from '../assets/icon_wx_small.png';
import IconClose from '../assets/icon_close_modal.png';
import IconTriangle from '../assets/icon_triangle.png';
import IconEyeClose from '../assets/icon_eye_close.png';
import IconEyeOpen from '../assets/icon_eye_open.png';
import IconExchange from '../assets/icon_exchange.png';

const OneKeyLogin = (props: any) => {
  const [selectedFlag, setSelectFlag] = useState(false);
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      paddingHorizontal: 50,
    },
    mainLogo: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    content: {
      width: '100%',
      flex: 2,
      flexDirection: 'column-reverse',
      paddingBottom: 30,
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
    footerIcon: {
      width: 15,
      height: 15,
      marginRight: 5,
    },
    footerText: {
      flexDirection: 'row',
      flex: 2,
      width: '100%',
    },
    text1: {
      fontSize: 12,
      color: '#999',
      height: 15,
      lineHeight: 15,
    },
    text2: {
      fontSize: 12,
      textAlign: 'left',
      width: 200,
      lineHeight: 15,
      color: '#333',
      flexWrap: 'wrap',
    },
    otherTypeView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 60,
      justifyContent: 'center',
    },
    otherTypeText: {
      fontSize: 10,
      color: '#333',
      lineHeight: 20,
      marginRight: 5,
      fontWeight: 'bold',
    },
    arrowIcon: {
      width: 8,
      height: 8,
      transform: [{rotate: '180deg'}],
      resizeMode: 'contain',
    },
    btnView: {
      height: 40,
      lineHeight: 40,
      textAlign: 'center',
      marginBottom: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    redBg: {
      backgroundColor: 'red',
    },
    wxBg: {
      backgroundColor: 'green',
    },
    btIcon: {
      width: 24,
      height: 24,
      marginRight: 5,
      resizeMode: 'contain',
    },
    btnText: {
      lineHeight: 15,
      color: '#fff',
      height: 15,
    },
  });

  return (
    <View style={styles.root}>
      <Image source={MainLogoIcon} style={styles.mainLogo} />
      <View style={styles.content}>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => setSelectFlag(!selectedFlag)}>
            <Image
              style={styles.footerIcon}
              source={selectedFlag ? SelectIcon : UnSelectIcon}
            />
          </TouchableOpacity>
          <Text style={styles.footerText}>
            <Text style={styles.text1}>我已阅读并同意</Text>
            <Text style={styles.text2} textBreakStrategy="simple">
              <Text
                style={styles.text2}
                onPress={() => {
                  Linking.openURL('https://www.baidu.com/');
                }}>
                《用户协议》
              </Text>
              <Text style={styles.text2}>《隐私协议》</Text>
              <Text style={styles.text2}>《儿童/青少年个人信息保护法》</Text>
              <Text style={styles.text2}>《中国移动认证服务条款》</Text>
            </Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.otherTypeView}
          onPress={() => {
            props.changeLoginType('inputType');
          }}>
          <Text style={styles.otherTypeText}>其他登录方式</Text>
          <Image style={styles.arrowIcon} source={IconArrow} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnView, styles.wxBg]}>
          <Image style={styles.btIcon} source={IconWeixin} />
          <Text style={styles.btnText}>微信登录</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnView, styles.redBg]}>
          <Text style={styles.btnText}>一键登录</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InputLoginView = (props: any) => {
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 50,
    },
    closeIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 5,
    },
    titleTips: {
      fontSize: 12,
      color: '#999',
      textAlign: 'center',
      marginBottom: 30,
    },
    phoneView: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 0,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 5,
      marginBottom: 10,
    },
    phoneIcon: {
      width: 10,
      height: 10,
      resizeMode: 'contain',
      marginRight: 10,
    },
    eyeIcon: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
      marginRight: 10,
    },
    phoneInput: {
      flex: 2,
      height: 30,
      lineHeight: 30,
      padding: 0,
      fontSize: 18,
      paddingHorizontal: 10,
    },
    tipsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconExchange: {
      width: 15,
      height: 15,
      resizeMode: 'contain',
    },
    tipsText: {
      fontSize: 12,
      color: '#666',
      lineHeight: 15,
    },
    tipsMiddle: {
      flex: 2,
      marginLeft: 5,
    },
  });
  const [showPsw, setShowPsw] = useState(false);
  return (
    <View style={styles.root}>
      <Image style={styles.closeIcon} source={IconClose} />
      <Text style={styles.titleText}>密码登录</Text>
      <Text style={styles.titleTips}>未注册的手机号登录成功后将自动注册</Text>
      <View style={styles.phoneView}>
        <Text>+86</Text>
        <Image style={styles.phoneIcon} source={IconTriangle} />
        <TextInput
          maxLength={11}
          style={styles.phoneInput}
          placeholder="请输入手机号"
        />
      </View>
      <View style={styles.phoneView}>
        <TextInput
          maxLength={11}
          style={styles.phoneInput}
          placeholder="输入密码"
          secureTextEntry={showPsw ? false : true}
        />
        <TouchableOpacity
          onPress={() => {
            setShowPsw(!showPsw);
          }}>
          <Image
            style={styles.eyeIcon}
            source={showPsw ? IconEyeOpen : IconEyeClose}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tipsContainer}>
        <Image style={styles.iconExchange} source={IconExchange} />
        <Text style={[styles.tipsText, styles.tipsMiddle]}>验证码登录</Text>
        <Text style={styles.tipsText}>忘记密码?</Text>
      </View>
    </View>
  );
};

export default () => {
  const [loginType, setLoginType] = useState('inputType');
  return loginType === 'inputType' ? (
    <InputLoginView changeLoginType={setLoginType} />
  ) : (
    <OneKeyLogin changeLoginType={setLoginType} />
  );
};
