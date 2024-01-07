import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {}
};
export const getStorage = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};
export const removeStorage = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {}
};
