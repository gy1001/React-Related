import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, TextInput} from 'react-native';

export default forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        selfFocus: () => {
          console.log('selfFocus');
          inputRef.current.focus();
        },
        selfBlur: () => {
          console.log('selfBlur');
          inputRef.current.blur();
        },
      };
    },
    [],
  );

  return (
    <View>
      <TextInput placeholder="请输入2" ref={inputRef}></TextInput>
    </View>
  );
});
