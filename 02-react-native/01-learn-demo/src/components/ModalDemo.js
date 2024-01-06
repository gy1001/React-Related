import React, {useState} from 'react';
import {View, StyleSheet, Modal, SectionList, Text, Button} from 'react-native';
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  content: {
    width: '100%',
    height: '90%',
    backgroundColor: '#ff00030',
  },
  sectionList: {
    width: '100%',
    height: '100%',
  },
  blank: {
    width: '100%',
    height: '10%',
    backgroundColor: '#00000050',
  },
  txt: {
    width: '100%',
    height: 56,
    fontSize: 20,
    color: '#333',
    textAlignVertical: 'center',
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
export default function ModalDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.root}>
      <Button
        title="按钮"
        onPress={() => {
          setVisible(true);
        }}
      />
      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onShow={() => {
          console.log('onSHow');
        }}
        onDismiss={() => {
          console.log('onDismiss'); // 有 bug 不会触发
        }}
        statusBarTranslucent={true}
        onRequestClose={() => {
          // ios 没有物理返回键，可以通过 表头设置返回键，点击触发关闭操作
          setVisible(false);
        }}>
        <View style={styles.blank} />
        <View style={styles.content}>
          <SectionList
            sections={SectionData}
            renderItem={renderItem}
            style={styles.sectionList}
            keyExtractor={(item, index) => `${item}-${index}`}
            contentContainerStyle={styles.contentContainer}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
            stickySectionHeadersEnabled={true}
          />
        </View>
      </Modal>
    </View>
  );
}
