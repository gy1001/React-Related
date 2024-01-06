import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SectionList,
  Text,
  StyleSheet,
  RefreshControl,
} from 'react-native';

const styles = StyleSheet.create({
  sectionList: {
    width: '100%',
    height: '100%',
  },
  txt: {
    width: '100%',
    height: 56,
    fontSize: 20,
    color: '#333',
    textAlignVertical: 'center',
  },
  sectionHederTxt: {
    width: '100%',
    height: 36,
    backgroundColor: '#DDDDDD',
    textAlignVertical: 'center',
    paddingLeft: 16,
    fontSize: 20,
    color: '#333',
  },
  contentContainer: {
    // paddingLeft: 16,
    backgroundColor: 'white',
  },
  listSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: '#D0D0D0',
  },
});

const SectionData = [
  {type: 'A', data: ['唐僧', '猪八戒', '孙悟空']},
  {
    type: 'B',
    data: ['包青天', '公孙策', '展昭', '王朝', '马汉', '张龙', '赵虎'],
  },
  {
    type: 'C',
    data: ['包青天2', '公孙策2', '展昭2', '王朝2', '马汉2', '张龙2', '赵虎2'],
  },
];
const renderItem = ({item, index, section}) => {
  return (
    <View>
      <Text style={styles.txt}>{item}</Text>
    </View>
  );
};
const renderSectionHeader = ({section}) => {
  return <Text style={styles.sectionHederTxt}>{section.type}</Text>;
};
export default function SectionListDemo() {
  const sectionListRef = useRef(null);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      //   sectionListRef.current.scrollToLocation({
      //     sectionIndex: 1,
      //     itemIndex: 3,
      //     viewPosition: 0,
      //     animated: true,
      //   });
    }, 2000);
  }, []);

  return (
    <SectionList
      ref={sectionListRef}
      sections={SectionData}
      renderItem={renderItem}
      style={styles.sectionList}
      keyExtractor={(item, index) => `${item}-${index}`}
      contentContainerStyle={styles.contentContainer}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
      stickySectionHeadersEnabled={true}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            console.log('onRefreshing ,,, do some request new data');
            setTimeout(() => {
              setRefreshing(false);
            }, 3000);
          }}
        />
      }
      onEndReached={() => {
        console.log('onEndReached,,,');
        //  to do something request next page data
      }}
      onEndReachedThreshold={0.2} // 取值：0-1,屏幕高度的百分比
    />
  );
}
