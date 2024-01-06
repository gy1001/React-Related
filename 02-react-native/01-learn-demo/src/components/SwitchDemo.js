import React, {useState} from 'react';
import {Switch} from 'react-native';

export default function () {
  const [switchState, setSwitchState] = useState(false);
  return (
    <Switch
      value={switchState}
      onValueChange={value => {
        setSwitchState(value);
      }}
      trackColor={{
        true: 'red',
        false: 'blue',
      }}
      thumbColor={switchState ? '#2030ff' : '#303030'}
      // disabled={true}
    />
  );
}
