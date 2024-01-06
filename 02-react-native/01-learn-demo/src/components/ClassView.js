import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
});

class ClassView extends React.Component {
  constructor(props) {
    // const {name, age, level} = props;
    super(props);
    this.state = {
      address: '北京市北京市朝阳区',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      // 更新 state 中的 address
      this.setState({
        address: '通州区万达广场',
      });
    }, 2000);
  }
  render() {
    const {name, age, level} = this.props;
    const {address} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>name: {name}</Text>
        <Text style={styles.text}>age: {age}</Text>
        <Text style={styles.text}>level: {level}</Text>
        <Text style={styles.text}>address: {address}</Text>
      </View>
    );
  }
}

export default ClassView;
