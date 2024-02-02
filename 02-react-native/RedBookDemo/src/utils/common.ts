import {ToastAndroid} from 'react-native';

export function showToast(message: string, duration: number = 2000) {
  ToastAndroid.show(message, duration);
}
