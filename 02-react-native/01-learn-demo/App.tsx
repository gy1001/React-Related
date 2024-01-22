/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import AnimateMenu from './src/components/AnimateMenu';
// import AnimateMenuAnswer from './src/components/AnimateMenuAnswer';
// import AccountManager from './src/components/AccountManager';
// import RootView from './src/components/RootView';
// import WithAddIcon from './src/components/HOC/withAddIcon';
// import InfoView from './src/components/InfoView';
// import ListDemo from './src/components/memo/listDemo';
// import CustomInput from './src/components/Ref/CustomInput';
// import CustomInput2 from './src/components/Ref/CustomInput2';
import CustomInput2Class from './src/components/Ref/CustomInput2Class';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const WithAddIconHoc = WithAddIcon(RootView);
  // const handleClickAddIcon = () => {
  //   console.log('click add icon');
  // };

  // const inputRef = useRef(null);
  // const handleCustomInputFocus = () => {
  //   console.log('handleCustomInputFocus');
  //   inputRef.current?.focus();
  // };

  const inputRef = useRef(null);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView> */}
      {/* <AnimateMenuAnswer /> */}
      {/* <AccountManager /> */}
      {/* <RootView /> */}
      {/* <WithAddIconHoc onAdd={handleClickAddIcon} /> */}
      {/* <InfoView /> */}
      {/* <ListDemo /> */}
      {/* <Button title="聚焦" onPress={handleCustomInputFocus} />
      <CustomInput ref={inputRef} /> */}

      <Button
        title="聚焦"
        onPress={() => {
          if (inputRef.current && inputRef.current.selfFocus) {
            inputRef.current.selfFocus();
          }
        }}
      />
      <Button
        title="失焦"
        onPress={() => {
          if (inputRef.current) {
            inputRef.current.selfBlur();
          }
        }}
      />
      <CustomInput2Class ref={inputRef} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
