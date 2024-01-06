import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IconBg from '../assets/images/icon_bg.png';
import IconMenu from '../assets/images/icon_menu.png';
import IconShare from '../assets/images/icon_share.png';
import DefaultAvatar from '../assets/images/default_avatar.png';
import IconAdd from '../assets/images/icon_add.png';
import IconSetting from '../assets/images/icon_setting.png';
import Icon_1 from '../assets/images/icon_1.png';
import Icon_2 from '../assets/images/icon_2.png';
import Icon_3 from '../assets/images/icon_3.png';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: 240,
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },

  headerImg: {
    width: '100%',
    flexDirection: 'column',
    height: 250,
    paddingTop: 20,
  },
  headerTop: {
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerMiddle: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  middleImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  middleImgAdd: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 5,
    left: 70,
  },
  middleTitle: {
    color: 'white',
    marginBottom: 4,
  },
  middleCode: {
    color: 'white',
    fontSize: 12,
  },
  middleTips: {
    color: 'white',
    margin: 10,
  },
  headerFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLeft: {
    flexDirection: 'row',
  },
  footerRight: {
    marginRight: 10,
    flexDirection: 'row',
  },
  footerItem: {
    color: 'white',
    height: 50,
    marginLeft: 10,
  },
  footerRightBtn: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 30,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
  },
  btnText: {
    color: 'white',
  },
  itemNum: {
    color: 'white',
    textAlign: 'center',
  },
  itemText: {
    color: 'white',
  },
  rightSetIcon: {
    width: 20,
    height: 20,
  },
  shareIcon: {
    width: 24,
    height: 24,
  },
  hederIcon: {
    width: 30,
    height: 30,
  },
  content: {
    width: '100%',
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  scrollContentStyle: {
    padding: 10,
  },
  tabBar: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
  },
  barItemText: {
    color: '#999',
  },
  mr20: {
    marginRight: 20,
    position: 'relative',
    textAlign: 'center',
  },
  active: {
    width: '70%',
    height: 2,
    left: '15%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -4,
  },
  activeText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

const contentStyles = StyleSheet.create({
  icon: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  desc: {
    fontSize: 16,
    marginTop: 16,
  },
  noDateItem: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 76,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 12,
    color: '#333333',
  },
});

export default function UserInfoPage() {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <View style={styles.root}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.header}>
        <ImageBackground style={styles.headerImg} source={IconBg}>
          <View style={styles.headerTop}>
            <Image style={styles.hederIcon} source={IconMenu} />
            <Image
              style={[styles.hederIcon, styles.shareIcon]}
              source={IconShare}
            />
          </View>
          <View style={styles.headerMiddle}>
            <Image style={styles.middleImg} source={DefaultAvatar} />
            <Image style={styles.middleImgAdd} source={IconAdd} />
            <View>
              <Text style={styles.middleTitle}>大公爵</Text>
              <Text style={styles.middleCode}>小红书号：1183202851</Text>
            </View>
          </View>
          <Text style={styles.middleTips}>点击关注，填写简介</Text>
          <View style={styles.headerFooter}>
            <View style={styles.footerLeft}>
              <View style={styles.footerItem}>
                <Text style={styles.itemNum}>142</Text>
                <Text style={styles.itemText}>关注</Text>
              </View>
              <View style={styles.footerItem}>
                <Text style={styles.itemNum}>2098</Text>
                <Text style={styles.itemText}>粉丝</Text>
              </View>
              <View style={styles.footerItem}>
                <Text style={styles.itemNum}>1042</Text>
                <Text style={styles.itemText}>获赞与收藏</Text>
              </View>
            </View>
            <View style={styles.footerRight}>
              <View style={styles.footerRightBtn}>
                <Text style={styles.btnText}>编辑资料</Text>
              </View>
              <View style={styles.footerRightBtn}>
                <Image
                  tintColor="white"
                  style={styles.rightSetIcon}
                  source={IconSetting}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.mr20}
            onPress={() => {
              setSelectIndex(0);
            }}>
            <Text
              style={[
                styles.barItemText,
                selectIndex === 0 ? styles.activeText : '',
              ]}>
              笔记
            </Text>
            <View style={selectIndex === 0 ? styles.active : ''} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.mr20}
            onPress={() => {
              setSelectIndex(1);
            }}>
            <Text
              style={[
                styles.barItemText,
                selectIndex === 1 ? styles.activeText : '',
              ]}>
              收藏
            </Text>
            <View style={selectIndex === 1 ? styles.active : ''} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setSelectIndex(2);
            }}>
            <Text
              style={[
                styles.barItemText,
                selectIndex === 2 ? styles.activeText : '',
              ]}>
              赞过
            </Text>
            <View style={selectIndex === 2 ? styles.active : ''} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContentStyle}>
          {selectIndex === 0 && (
            <View style={contentStyles.noDateItem}>
              <Image style={contentStyles.icon} source={Icon_1} />
              <Text style={contentStyles.desc}>
                用一句话，分享今天的快乐吧～
              </Text>
              <Text style={contentStyles.button}>去分享</Text>
            </View>
          )}
          {selectIndex === 1 && (
            <View style={contentStyles.noDateItem}>
              <Image style={contentStyles.icon} source={Icon_2} />
              <Text style={contentStyles.desc}>快去收藏你喜欢的作品吧～</Text>
              <Text style={contentStyles.button}>去收藏</Text>
            </View>
          )}
          {selectIndex === 2 && (
            <View style={contentStyles.noDateItem}>
              <Image style={contentStyles.icon} source={Icon_3} />
              <Text style={contentStyles.desc}>你还没有给作品点赞哦～</Text>
              <Text style={contentStyles.button}>去点赞</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
