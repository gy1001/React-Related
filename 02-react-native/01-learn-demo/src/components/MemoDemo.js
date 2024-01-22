// import React, {memo} from 'react';
// import {View, Text} from 'react-native';

// export default memo(
//   function MyComponent(props) {
//     console.log('MyComponent重新渲染了');
//     console.group(props);
//     return (
//       <View>
//         <Text>姓名：{props.info.name}</Text>
//         <Text>年龄：{props.info.age}</Text>
//         <Text>性别：{props.info.gender}</Text>
//       </View>
//     );
//   },
//   (prevProps, nextProps) => {
//     // 返回true时，组件将不会重新渲染
//     // 返回false时，组件会重新渲染
//     // return true;
//     return JSON.stringify(prevProps.info) === JSON.stringify(nextProps.info);
//   },
// );

import React from 'react';
import {View, Text} from 'react-native';

export default class MemoDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    // 返回true时，组件将不会重新渲染
    return JSON.stringify(this.props.info) !== JSON.stringify(nextProps.info);
  }
  render() {
    const {info} = this.props;
    console.log('MemoDemo重新渲染了');
    return (
      <View>
        <Text>姓名：{info.name}</Text>
        <Text>年龄：{info.age}</Text>
        <Text>性别：{info.gender}</Text>
      </View>
    );
  }
}
