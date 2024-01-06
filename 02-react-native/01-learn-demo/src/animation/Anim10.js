import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  LayoutAnimation,
  Image,
} from 'react-native';
import IconAvatar from '../assets/images/default_avatar.png';
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    width: '100%',
    height: 100,
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  txt: {
    fontSize: 20,
    color: '#303030',
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
});

export default function Anim1Demo() {
  const [showRight, setShowRight] = useState(false);

  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          // LayoutAnimation.configureNext(
          //   // LayoutAnimation.Presets.linear
          //   // LayoutAnimation.Presets.spring, // 弹跳
          //   LayoutAnimation.Presets.easeInEaseOut, // 平缓
          //   () => {
          //     console.log('动画执行完毕');
          //   },
          //   () => {
          //     console.log('动画执行异常');
          //   },
          // );
          // LayoutAnimation.linear();
          LayoutAnimation.easeInEaseOut();
          // LayoutAnimation.spring();
          setShowRight(!showRight);
        }}
      />
      {/* Animated.View 在布局上就可以当做 View */}
      {/* {showView && <View style={[styles.view1]} />} */}

      <View
        style={[
          styles.view1,
          {
            flexDirection: !showRight ? 'row' : 'row-reverse',
          },
        ]}>
        <Image style={styles.img} source={IconAvatar} />
        <Text style={styles.txt}>这是一行自我介绍文本</Text>
      </View>
    </View>
  );
}
