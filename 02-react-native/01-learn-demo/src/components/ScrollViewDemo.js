import React, {useRef} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Button,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  root1: {
    width: '100%',
    height: 700,
    backgroundColor: 'white',
    // display: 'none',
  },
  root2: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#E0E0E0',
    paddingTop: 20,
  },
  text: {
    width: '100%',
    height: 56,
    textAlignVertical: 'center',
    fontSize: 24,
    color: 'black',
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
  },
});

export default function ScrollViewDemo() {
  const scrollViewRef = useRef(null);
  const array = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  const buildListView = () => {
    const newArray = [];
    for (let index = 20; index <= 40; index++) {
      newArray.push(
        <Text key={'item-' + index} style={styles.text}>
          List Item{index}
        </Text>,
      );
    }
    return newArray;
  };
  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        style={styles.root1}
        showsVerticalScrollIndicator={false}
        contentOffset={{y: 100}} // 指定初始时滚动位置
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="on-drags"
        onScroll={event => {
          console.log(event.nativeEvent.contentOffset.y);
        }}
        scrollEnabled={true}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.contentContainer}>
        <Button
          title="按钮"
          onPress={() => {
            // scrollViewRef.current.scrollTo({y: 500, animated: true});
            scrollViewRef.current.scrollToEnd({animated: true});
          }}
        />
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.text}>45</Text>
        <Text style={styles.text}>5</Text>
        <Text style={styles.text}>6</Text>
        <Text style={styles.text}>7</Text>
        <TextInput style={styles.input} />
        {array.map(item => {
          return (
            <Text key={item} style={styles.text}>
              List item {item}
            </Text>
          );
        })}
        {buildListView()}
      </ScrollView>
      {/* 横向类似轮播 */}
      {/* <ScrollView horizontal={true} style={styles.root2} pagingEnabled={true}>
        <View style={{width, height: 200, backgroundColor: 'red'}} />
        <View style={{width, height: 200, backgroundColor: 'blue'}} />
        <View style={{width, height: 200, backgroundColor: 'green'}} />
      </ScrollView> */}
    </View>
  );
}
