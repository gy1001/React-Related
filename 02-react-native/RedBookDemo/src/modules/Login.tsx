import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  LayoutAnimation,
} from 'react-native';
import MainLogoIcon from '../assets/icon_main_logo.png';
import SelectIcon from '../assets/icon_selected.png';
import UnSelectIcon from '../assets/icon_unselected.png';
import IconArrow from '../assets/icon_arrow.png';
import IconWeixinSmall from '../assets/icon_wx_small.png';
import IconClose from '../assets/icon_close_modal.png';
import IconTriangle from '../assets/icon_triangle.png';
import IconEyeClose from '../assets/icon_eye_close.png';
import IconEyeOpen from '../assets/icon_eye_open.png';
import IconExchange from '../assets/icon_exchange.png';
import IconWeixin from '../assets/icon_wx.png';
import IconQQ from '../assets/icon_qq.webp';
import {showToast} from '../utils/common';
import {get} from '../utils/request';

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
      paddingTop: 20,
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
            LayoutAnimation.easeInEaseOut();
            props.changeLoginType('inputType');
          }}>
          <Text style={styles.otherTypeText}>其他登录方式</Text>
          <Image style={styles.arrowIcon} source={IconArrow} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnView, styles.wxBg]}>
          <Image style={styles.btIcon} source={IconWeixinSmall} />
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
      paddingTop: 20,
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
      marginBottom: 20,
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
    loginBtn: {
      marginBottom: 10,
      backgroundColor: '#007AFF',
      borderRadius: 20,
    },
    disabledBtn: {
      backgroundColor: '#ccc',
    },
    loginText: {
      textAlign: 'center',
      width: '100%',
      height: 40,
      lineHeight: 40,
      color: '#fff',
    },
    agreeTips: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginBottom: 50,
    },
    footerIcon: {
      width: 15,
      height: 15,
      marginRight: 5,
      resizeMode: 'contain',
      marginTop: 3,
    },
    tipsTextContainer: {
      fontSize: 12,
      lineHeight: 20,
    },
    grayText: {
      color: '#999',
    },
    protoText: {
      color: '#333',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    icon: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
  });
  const [showPsw, setShowPsw] = useState(false);
  const [selectedFlag, setSelectFlag] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [usePwd, setUsePwd] = useState('');

  const loginHandler = () => {
    if (!userPhone || userPhone.length < 11 || !usePwd || usePwd.length < 6) {
      showToast('请输入有效的手机号或者密码');
      return;
    }
    get('/user/login', {
      phone: userPhone,
      password: usePwd,
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          props.changeLoginType('oneKeyLogin');
        }}>
        <Image style={styles.closeIcon} source={IconClose} />
      </TouchableOpacity>
      <Text style={styles.titleText}>密码登录</Text>
      <Text style={styles.titleTips}>未注册的手机号登录成功后将自动注册</Text>
      <View style={styles.phoneView}>
        <Text>+86</Text>
        <Image style={styles.phoneIcon} source={IconTriangle} />
        <TextInput
          maxLength={11}
          style={styles.phoneInput}
          placeholder="请输入手机号"
          value={userPhone}
          onChangeText={e => {
            setUserPhone(e);
          }}
        />
      </View>
      <View style={styles.phoneView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="输入密码"
          secureTextEntry={showPsw ? false : true}
          value={usePwd}
          onChangeText={e => setUsePwd(e)}
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
      <TouchableOpacity
        onPress={loginHandler}
        style={[
          styles.loginBtn,
          userPhone && userPhone.length === 11 && usePwd
            ? styles.loginBtn
            : styles.disabledBtn,
        ]}>
        <Text style={styles.loginText}>登录</Text>
      </TouchableOpacity>
      <View style={styles.agreeTips}>
        <TouchableOpacity onPress={() => setSelectFlag(!selectedFlag)}>
          <Image
            style={styles.footerIcon}
            source={selectedFlag ? SelectIcon : UnSelectIcon}
          />
        </TouchableOpacity>
        <Text style={styles.tipsTextContainer}>
          <Text style={styles.grayText}>我已阅读并同意</Text>
          <Text style={styles.protoText}>《用户协议》</Text>
          <Text style={styles.protoText}>《隐私政策》</Text>
          <Text style={styles.protoText}>《儿童/青少年个人信息保护规则》</Text>
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={IconWeixin} />
        <Image style={styles.icon} source={IconQQ} />
      </View>
    </View>
  );
};

export default () => {
  const [loginType, setLoginType] = useState('oneKeyLogin');
  return loginType === 'inputType' ? (
    <InputLoginView changeLoginType={setLoginType} />
  ) : (
    <OneKeyLogin changeLoginType={setLoginType} />
  );
};
