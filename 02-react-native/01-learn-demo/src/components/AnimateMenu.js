import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import IconHome from '../assets/images/icon_home.png';
import IconGift from '../assets/images/icon_gift.png';
import IconMine from '../assets/images/icon_mine.png';
import IconShow from '../assets/images/icon_show.png';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  menuItem: {
    height: 50,
    backgroundColor: 'blue',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: 50,
  },
  active: {
    width: 150,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: -4,
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
const ORIGIN_WIDTH = 40;
const AFTER_WIDTH = 150;
export default function AnimateMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const widthValue0 = useRef(new Animated.Value(AFTER_WIDTH)).current;
  const widthValue1 = useRef(new Animated.Value(ORIGIN_WIDTH)).current;
  const widthValue2 = useRef(new Animated.Value(ORIGIN_WIDTH)).current;
  const widthValue3 = useRef(new Animated.Value(ORIGIN_WIDTH)).current;
  const onPress = number => {
    setActiveIndex(number);
  };
  useEffect(() => {
    commonAnimated(widthValue0, activeIndex === 0);
    commonAnimated(widthValue1, activeIndex === 1);
    commonAnimated(widthValue2, activeIndex === 2);
    commonAnimated(widthValue3, activeIndex === 3);
  }, [activeIndex, widthValue0, widthValue1, widthValue2, widthValue3]);
  const commonAnimated = (widthValueType, isTargetNumber) => {
    Animated.timing(widthValueType, {
      toValue: isTargetNumber ? AFTER_WIDTH : ORIGIN_WIDTH,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={[styles.root]}>
      <TouchableOpacity onPress={() => onPress(0)}>
        <Animated.View style={[styles.menuItem, {width: widthValue0}]}>
          <Image style={styles.imageIcon} source={IconHome} />
          <Text ellipsizeMode="clip" numberOfLines={1} style={styles.text}>
            首页推荐
          </Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(1)}>
        <Animated.View style={[styles.menuItem, {width: widthValue1}]}>
          <Image style={styles.imageIcon} source={IconShow} />
          <Text ellipsizeMode="clip" numberOfLines={1} style={styles.text}>
            精选活动
          </Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(2)}>
        <Animated.View style={[styles.menuItem, {width: widthValue2}]}>
          <Image style={styles.imageIcon} source={IconGift} />
          <Text ellipsizeMode="clip" numberOfLines={1} style={styles.text}>
            活动
          </Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(3)}>
        <Animated.View style={[styles.menuItem, {width: widthValue3}]}>
          <Image style={styles.imageIcon} source={IconMine} />
          <Text ellipsizeMode="clip" numberOfLines={1} style={styles.text}>
            我的
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
