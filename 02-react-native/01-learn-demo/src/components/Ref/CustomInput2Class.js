import React from 'react';
import {View, TextInput} from 'react-native';

export default class CustomInputClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  inputRef = React.createRef(null);

  selfFocus() {
    console.log('selfFocus');
    this.inputRef.current.focus();
  }

  selfBlur() {
    console.log('selfBlur');
    this.inputRef.current.blur();
  }

  render() {
    return (
      <View>
        <TextInput placeholder="请输入2" ref={this.inputRef}></TextInput>
      </View>
    );
  }
}
