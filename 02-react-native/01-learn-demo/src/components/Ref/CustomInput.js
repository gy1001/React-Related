import React, {useRef, forwardRef} from 'react';
import {View, TextInput} from 'react-native';

export default forwardRef(function CustomInput(props, ref) {
  // const inputRef = useRef(null);

  return (
    <View>
      <TextInput placeholder="请输入" ref={ref}></TextInput>
    </View>
  );
});
