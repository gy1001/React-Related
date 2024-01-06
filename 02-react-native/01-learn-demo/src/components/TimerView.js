import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
function TimerView() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return <Text>{count}</Text>;
}

// function TimerView() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(data => {
//         return data + 1;
//       });
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <Text>{count}</Text>;
// }

export default TimerView;
