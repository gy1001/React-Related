import React, {useEffect} from 'react';
import {
  Button,
  Text,
  View,
  Alert,
  useWindowDimensions,
  Dimensions,
  Platform,
  StyleSheet,
  Linking,
  PixelRatio,
  BackHandler,
  PermissionsAndroid,
  Vibration,
  ToastAndroid,
  Keyboard,
  TextInput,
} from 'react-native';

const s1 = {
  fontSize: 18,
};
const s2 = {
  fontSize: 20,
  color: 'red',
};
const composeStyle = StyleSheet.compose(s1, s2);
console.log(composeStyle); // [{"fontSize": 18}, {"color": "red", "fontSize": 20}]

const flatStyle = StyleSheet.flatten([s1, s2]);
console.log(flatStyle); // {"fontSize": 20, "color": "red"}

const absoluteStyle = StyleSheet.absoluteFill;
console.log(absoluteStyle); // {{"bottom": 0, "left": 0, "position": "absolute", "right": 0, "top": 0}

// 头发丝宽度就是一个像素
console.log(StyleSheet.hairlineWidth);
console.log(1 / Dimensions.get('screen').scale);

export default function TestApiDemo() {
  console.log(Platform.OS === 'android');
  console.log(Platform.OS === 'ios');
  console.log(Platform.Version); // 安卓 SDK 的版本号
  console.log(Platform.constants); // 品牌、型号、系统、SDK版本等
  console.log(Platform.isPad); // 针对 ios 判断的
  console.log(Platform.isTV);
  const style = Platform.select({
    ios: {
      marginTop: 200,
    },
    android: {
      marginTop: 150,
    },
    default: {
      marginTop: 100,
    },
  });
  console.log(style); // 安卓端就会打印出来 {"marginTop": 150}
  // 实际应用
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
      paddingTop: Platform.select({
        // ios: 200,
        // android: 150,
        // default: 100,
      }),
      ...Platform.select({
        ios: {
          // marginTop: 20,
        },
        android: {
          // marginTop: 10,
        },
        default: {
          marginTop: 15,
        },
      }),
    },
    view: {
      width: '100%',
      backgroundColor: 'red',
      display: 'none',
    },
    subView: {
      width: '100%',
      backgroundColor: 'blue',
      height: PixelRatio.roundToNearestPixel(32.1),
    },
  });

  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  console.log('screenWidth', screenWidth, screenHeight);

  const {width, height, scale, fontScale} = Dimensions.get('window');
  console.log('width', width, height, scale, fontScale);
  // screen 会加上状态栏的高度,如果是通栏的,通过 window 和 screen 获得的 宽高度是一致的
  const {width: windowScreenWidth, height: windowScreenHeight} =
    Dimensions.get('screen');
  console.log('windowScreenWidth', windowScreenWidth, windowScreenHeight);

  useEffect(() => {
    // 比如某些安卓手机底部导航键是可以进行设置收起的，类似场景就会触发
    const subscription = Dimensions.addEventListener(
      'change',
      (window, screen) => {
        console.log('window', window, screen);
      },
    );

    const keyboardDidShow = () => {
      console.log('keyboardDidShow');
    };

    const keyboardDidHide = () => {
      console.log('keyboardDidHide');
    };

    const backFordAndroid = () => {
      // 返回上一页
      // return true 表示拦截处理
      // 返回 false 表示不拦截，默认系统处理
      // return false;
    };

    BackHandler.addEventListener('hardwareBackPress', backFordAndroid);

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const didSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
    return () => {
      subscription.remove();
      showSubscription.remove();
      didSubscription.remove();
      BackHandler.removeEventListener('hardwareBackPress', backFordAndroid);
    };
  }, []);

  const onPress = () => {
    // if (Linking.canOpenURL('https://www.baidu.com')) {
    //   Linking.openURL('https://www.baidu.com'); // 会调用系统浏览器打开页面
    // } else {
    //   console.log('无法打开链接');
    // }
    // Linking.openURL('geo:37.122, 12.222'); // 通过地址软件打开经纬度
    // Linking.openURL('tel:10086'); // 拨打电话
    // Linking.openURL('sms:10086'); // 发送短信
    // Linking.openURL('mailto:10086@163.com'); // 发送邮件
    // 你需要使用该应用的特定 URL scheme。
    // Linking.openURL('dagongjue://demo'); // schema://路径
    // Linking.openSettings(); // 跳转到应用设置页面
    // Linking.sendIntent('', [{key: 'name', value: '张三'}]);
    // Linking.getInitialURL();
    // console.log(Linking.getInitialURL());

    console.log(PixelRatio.get() === Dimensions.get('screen').scale); // true

    console.log(
      PixelRatio.getFontScale() === Dimensions.get('screen').fontScale,
    ); // true

    console.log(
      PixelRatio.getPixelSizeForLayoutSize(100) === 100 * PixelRatio.get(),
    ); // true

    // console.log(PermissionsAndroid.PERMISSIONS);
    // const needPermission = PermissionsAndroid.PERMISSIONS.CAMERA;
    // PermissionsAndroid.check(needPermission).then(result => {
    //   console.log(result, 11111);
    //   if (!result) {
    //     PermissionsAndroid.request(needPermission).then(status => {
    //       console.log(status, 22222);
    //     });
    //   }
    // });

    // PermissionsAndroid.requestMultiple([
    //   PermissionsAndroid.PERMISSIONS.CAMERA,
    //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    // ]).then(res => {});

    // Vibration.vibrate(); // 震动 400ms 默认
    // Vibration.vibrate(1000); // 震动 1s 中，只对于 安卓
    // Vibration.cancel(); // 取消

    // 先停100ms 震动 5000，在停 1s 在震2s
    // Vibration.vibrate([100, 5000, 1000, 2000]);
    // IOS 由于震动时间不能更改，所以生效的只是中间的停止时间
    // Vibration.vibrate([2000, 500, 2000, 500], true);
    // ToastAndroid.show('提示信息', ToastAndroid.SHORT); // 3s
    // ToastAndroid.show('提示信息', ToastAndroid.LONG); // 5s

    ToastAndroid.showWithGravity(
      '提示信息',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );

    console.log('点击了');
    console.info('日志输出');
    console.debug('调试日志输出');
    console.warn('警告日志输出');
    console.error('错误日志输出');
    // alert('这是一条提示信息');
    const buttons = [
      {
        text: '取消',
        onPress: () => {
          console.log('点击了取消');
        },
      },
      {
        text: '确定',
        onPress: () => {
          console.log('点击了确定');
        },
      },
    ];
    // Alert.alert('我是标题', '我是内容', buttons);
  };
  return (
    <View style={styles.root}>
      <Button title="按钮1" onPress={onPress} />
      <Button
        onPress={() => {
          const name = '猪八戒';
          console.log('猪的祖先%s', name);
          console.log('我是个人开发者,我学习%d年了', 1);
          const nameObj = {
            name: '猪八戒',
            age: 100,
          };
          console.log('我是一个对象：%o', nameObj);
          // 终端不能生效，在浏览器控制台可以
          console.log(
            '%c这行日志红色文字，字好大%c',
            'color:red;font-size:x-large',
          );
          console.log(
            '%c这行日志蓝色文字，字号中等%c',
            'color:blue;font-size:x-medium',
          );
          console.log(
            '%c这行日志绿色蚊子，字号小号%c',
            'color:green;font-size:x-small',
          );
          const viewLayout = (
            <View style={{flexDirection: 'column'}}>
              <Text> 我是标题</Text>
            </View>
          );
          // 组件状态也许是从后台获取的，然后数据不固定，这时候打印就比较清晰看到
          console.log(viewLayout);

          // 在浏览器中可以看出来效果，终端没有
          const users = [
            {name: '张三', age: 10},
            {name: '李四', age: 30},
          ];
          console.table(users);
          console.group();
          console.log('我是分组中的第一行');
          console.log('我是分组中的第二行');
          console.log('我是分组中的第三行');
          console.group();
          console.log('我是二级分组中的第一行');
          console.log('我是二级分组中的第二行');
          console.log('我是二级分组中的第三行');
          console.groupEnd();
          console.log('end');
        }}
        title="按钮2"
      />
      <View
        style={[
          {
            width: 200,
            height: 200,
            backgroundColor: 'red',
            marginTop: 100,
          },
          {
            transform: [
              {
                // translateX: 100,
                // translateY: 100,
                // scale: 1.5,
                scaleX: 1.5,
              },
              {
                scaleY: 1.5,
              },
              // {
              //   rotateX: '45deg', // 沿着 x 中间轴旋转
              // },
              // {
              //   rotateY: '45deg', // 沿着 y 中间轴旋转
              // },
              // {
              //   rotateZ: '45deg', // 沿着 z 中间轴旋转
              // },
              {
                rotate: '45deg', // 沿着 z 轴旋转
              },
            ],
          },
        ]}
      />
      <TextInput
        style={{width: '100%', height: 50, backgroundColor: '#E0E0E0'}}
      />
      <View style={styles.view}>
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
      </View>
    </View>
  );
}
