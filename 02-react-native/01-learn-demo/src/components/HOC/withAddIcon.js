import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AddIcon from '../../assets/images/icon_add.png';

const styles = StyleSheet.create({
  addIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    // position: 'fixed',
    bottom: 50,
    right: 30,
  },
});

export default function AddButton(OriginComponent) {
  const handleClick = onAdd => {
    onAdd && onAdd();
  };
  return props => (
    <View>
      <OriginComponent></OriginComponent>
      <TouchableOpacity onPress={() => handleClick(props.onAdd)}>
        <Image style={styles.addIcon} source={AddIcon}></Image>
      </TouchableOpacity>
    </View>
  );
}
