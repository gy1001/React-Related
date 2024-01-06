import React, {useEffect, useRef} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '50%',
  },
  text: {
    width: '50%',
    height: 56,
    fontSize: 24,
    color: 'black',
  },
  text2: {
    width: 100,
    height: 56,
    fontSize: 24,
    color: 'black',
  },
  containerStyle: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
  footer: {
    width: '100%',
    height: 40,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: '#D0D0D0',
  },
});
const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
];
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const renderItem = ({item, info}) => {
  return <Text style={styles.text}>{item}</Text>;
};
const renderItem2 = ({item, info}) => {
  return <Text style={styles.text2}>{item}</Text>;
};
const ListHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>ListHeader</Text>
  </View>
);
const ListFooter = () => (
  <View style={styles.footer}>
    <Text style={styles.headerText}>ListFooter</Text>
  </View>
);
const ListEmpty = () => (
  <View style={styles.empty}>
    <Text style={styles.headerText}>暂时无数据哦~</Text>
  </View>
);
export default function FlatListDemo() {
  const flatListRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      // flatListRef.current.scrollToIndex({
      //   index: 5,
      //   viewPosition: 0, // 0 是屏幕顶部，1是屏幕底部，0.5 是屏幕中间
      //   animated: true,
      // });
      // flatListRef.current.scrollToItem({
      //   item: 11,
      //   viewPosition: 0,
      //   animated: true,
      // });
      //
      // flatListRef.current.scrollToOffset({
      //   offset: 200,
      // });
      flatListRef.current.scrollToEnd({
        animated: true,
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        ref={flatListRef}
        style={styles.container}
        // data={[] || data}
        data={data}
        keyExtractor={(item, index) => `item-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          console.log(event.nativeEvent.contentOffset.y);
        }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        horizontal={false}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListEmptyComponent={ListEmpty}
        ItemSeparatorComponent={<View style={styles.listSeparator} />}
        initialNumToRender={15}
        inverted={false}
        numColumns={2}
        onViewableItemsChanged={info => {
          // 可以获得滚动到哪个元素
          console.log(info.viewableItems);
        }}
      />
      {true && (
        <FlatList
          style={styles.container}
          data={data2}
          keyExtractor={(item, index) => `item-${index}`}
          renderItem={renderItem2}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            console.log(event.nativeEvent.contentOffset.x);
          }}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          horizontal={true}
        />
      )}
    </View>
  );
}
