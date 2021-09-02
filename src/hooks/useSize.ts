import {
  useEffect, useLayoutEffect, useMemo, useState,
} from 'react';
import {
  Dimensions, Platform, ScaledSize, StatusBar,
} from 'react-native';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

import getSize from '../module/SizeModule';

/**
 * 크기를 계산하는 함수입니다.
 * @param size {number} 얻은 크기를 나타냅니다.
 * @return {number} 얻은 크기를 조작한 값입니다.
 */
export type Calculator = (size: number) => number;

/**
 * 얻을 수 있는 크기를 모아둔 타입입니다.
 */
export type SizeType = (
  'screen-width' | 'screen-height'
  | 'app-width' | 'app-height'
  | 'status-height' | 'navigation-height'
);

/**
 * 스마트폰의 크기, 어플리케이션의 `Activity`의 크기와 같은 상수를 얻습니다.
 * @param key 어떤 크기를 가져올지 결정합니다.
 * @param calc 크기를 계산하는 함수입니다. 자세한 내용은 {@link Calculator}을 참고하세요.
 */
const useSize = (key: SizeType, calc: Calculator = (it) => it): number => {
  const navigationHeight = useMemo(() => (
    Platform.select({
      ios: getBottomSpace(),
      android: getSize('NAVIGATION_BAR'),
    }) ?? 0
  ), []);
  const statusHeight = useMemo(() => (
    Platform.select({
      ios: getStatusBarHeight(true),
      android: StatusBar.currentHeight ?? 0,
    }) ?? 0
  ), []);
  const [screenSize, setScreenSize] = useState(Dimensions.get('screen'));
  const [appSize, setAppSize] = useState(Dimensions.get('window'));

  const selectSize = useMemo(() => {
    switch (key) {
      case 'screen-width':
        return screenSize.width;
      case 'screen-height':
        return screenSize.height;
      case 'app-width':
        return appSize.width;
      case 'app-height':
        return appSize.height;
      case 'navigation-height':
        return navigationHeight;
      case 'status-height':
        return statusHeight;
      default:
        return 0;
    }
  }, [key, screenSize, appSize, navigationHeight, statusHeight]);

  type DimensionEvent = { window: ScaledSize; screen: ScaledSize };
  const listener = useMemo(() => ({ window, screen }: DimensionEvent) => {
    setScreenSize(screen);
    setAppSize(window);
  }, []);

  useLayoutEffect(() => {
    Dimensions.addEventListener('change', listener);

    return () => {
      Dimensions.removeEventListener('change', listener);
    };
  }, [listener]);

  // --------

  const [result, setResult] = useState(calc(selectSize));

  useEffect(() => {
    setResult(calc(selectSize));
  }, [selectSize, calc]);

  return result;
};

export default useSize;
