/* eslint-disable no-console */

import { NativeModules, Platform } from 'react-native';

const { SizeModule } = NativeModules;

type SizeType = 'NAVIGATION_BAR';
function getSize(name: SizeType): number {
  if (process.env.JEST_WORKER_ID) {
    return 0; // mocking
  }

  if (Platform.OS === 'android') {
    if (SizeModule) {
      const result = SizeModule[name];

      if (typeof result === 'number') {
        return result;
      }

      console.warn('Result is not number', result);
    } else {
      console.warn('Cannot find Size module');
    }
  } else {
    console.warn('Size module must be called in android');
  }

  return 0;
}

export default getSize;
