import React, {useState, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ListData, ListData2} from '../../constants/Data';

export default function ListDemo() {
  const [selectFlag, setSelectFlag] = useState(false);
  const [flatListData, setFlatListData] = useState(ListData);

  const handleItemClick = useCallback(
    (item, index) => () => {
      console.log('点击了第', index, '个item', item);
    },
    [],
  );

  const renderItem = ({item, index}) => {
    console.log('renderItem 被渲染了');
    const styles = StyleSheet.create({
      rootView: {
        flexDirection: 'row',
        padding: 10,
      },
    });

    return (
      <TouchableOpacity
        style={styles.rootView}
        onPress={handleItemClick(item, index)}>
        <Text>索引：{index}</Text>
        <Text>金额：{item.amount}</Text>
        <Text>索引：{item.index}</Text>
        <Text>名字：{item.name}</Text>
        <Text>类型：{item.type}</Text>
      </TouchableOpacity>
    );
  };

  const handleBtnClick = () => {
    setSelectFlag(!selectFlag);
    console.log('点击了按钮');
    // setFlatListData(ListData2);
  };

  const totalMoney = useMemo(() => {
    console.log('totalMoney被重新计算了');
    return flatListData.reduce((pre, item) => {
      return pre + item.amount;
    }, 0);
  }, [flatListData]);

  const FlatListCom = useMemo(() => {
    console.log('FlatListCom被重新计算了');
    return <FlatList data={flatListData} renderItem={renderItem}></FlatList>;
  }, [flatListData]);

  return (
    <View>
      <Text>选中flag: {selectFlag}</Text>
      <Button title="切换数据" onPress={handleBtnClick}></Button>
      {FlatListCom}
      <Text>总金额：{totalMoney}</Text>
    </View>
  );
}
