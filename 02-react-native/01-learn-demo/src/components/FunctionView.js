import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  blueText: {
    color: 'blue',
  },
});

function FunctionView(props) {
  const {name, age, level} = props;
  const [address, setAddress] = useState('北京市北京市');
  const scrollViewRef = useRef(null);
  const {width, height} = useWindowDimensions();
  console.log(width, height);
  const colorScheme = useColorScheme();
  console.log('colorScheme', colorScheme);

  //  useEffect 第二个参数为空数组时，会在第一次渲染后执行一次。。
  useEffect(() => {
    setTimeout(() => {
      setAddress('通州区万达广场');
      scrollViewRef.current.scrollToEnd({animate: true});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>name: {name}</Text>
      <Text style={styles.text}>age: {age}</Text>
      <Text style={styles.text}>level: {level}</Text>
      <Text style={styles.text}>address: {address}</Text>
      <ScrollView ref={scrollViewRef}>
        <Text style={styles.blueText}>AAAA</Text>
        <Text style={styles.blueText}>BBBB</Text>
        <Text style={styles.blueText}>CCCC</Text>
        <Text style={styles.blueText}>DDDD</Text>
        <Text style={styles.blueText}>EEEE</Text>
        <Text style={styles.blueText}>FFFF</Text>
        <Text style={styles.blueText}>GGGG</Text>
        <Text style={styles.blueText}>HHHH</Text>
      </ScrollView>
    </View>
  );
}
export default FunctionView;
