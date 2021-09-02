import React, { PropsWithChildren, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import BoxProps from './BoxProps';
import SizeConverter from '../../utils/Size/SizeConverter';
import Gravity from './Gravity';
import { ReactNativeStyle } from '../../types';

/**
 * 기존 `react-native`의 `View`를 대체합니다.
 * 크기, 위치를 쉽게 설정할 수 있습니다. 대부분의 단위는 {@link SizeUnit}기준입니다.
 * @param __namedParameters `ReactElement`를 만들기 위한 `props`입니다. 구체적인 내용은 {@link BoxProps}을 참고해주세요
 * @return `React.View`나 `React.ScrollView`를 리턴합니다. `scrollEnabled`의 여부에 따라 컴포넌트가 바뀝니다.
 * @category component
 */
const Box = ({
  width: initWidth,
  height: initHeight,
  padding: initPadding,
  paddingStart,
  paddingEnd,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin: initMargin,
  marginStart,
  marginEnd,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  children,
  position,
  align,
  gravity: initGravity,
  scrollEnabled,
  ...props
}: PropsWithChildren<BoxProps>): JSX.Element => {
  const width = useMemo(
    () => (
      initWidth !== undefined
        ? SizeConverter.convertSize(initWidth)
        : 'auto'
    ),
    [initWidth],
  );
  const height = useMemo(
    () => (
      initHeight !== undefined
        ? SizeConverter.convertSize(initHeight)
        : 'auto'
    ),
    [initHeight],
  );

  const padding = useMemo(() => {
    const start = paddingStart ? SizeConverter.convertSize(paddingStart) : undefined;
    const end = paddingEnd ? SizeConverter.convertSize(paddingEnd) : undefined;
    let left = paddingLeft ? SizeConverter.convertSize(paddingLeft) : undefined;
    let right = paddingRight ? SizeConverter.convertSize(paddingRight) : undefined;
    let top = paddingTop ? SizeConverter.convertSize(paddingTop) : undefined;
    let bottom = paddingBottom ? SizeConverter.convertSize(paddingBottom) : undefined;

    if (initPadding) {
      if (SizeConverter.isDirectional(initPadding)) {
        const value = SizeConverter.convertDirectionalSize(initPadding);

        left = value.left;
        right = value.right;
        top = value.top;
        bottom = value.bottom;
      } else {
        const value = SizeConverter.convertSize(initPadding);

        left = value;
        right = value;
        top = value;
        bottom = value;
      }
    }

    return {
      paddingStart: start,
      paddingEnd: end,
      paddingLeft: left,
      paddingRight: right,
      paddingTop: top,
      paddingBottom: bottom,
    };
  }, [initPadding, paddingBottom, paddingEnd, paddingLeft, paddingRight, paddingStart, paddingTop]);

  const margin = useMemo(() => {
    const start = marginStart ? SizeConverter.convertSize(marginStart) : undefined;
    const end = marginEnd ? SizeConverter.convertSize(marginEnd) : undefined;
    let left = marginLeft ? SizeConverter.convertSize(marginLeft) : undefined;
    let right = marginRight ? SizeConverter.convertSize(marginRight) : undefined;
    let top = marginTop ? SizeConverter.convertSize(marginTop) : undefined;
    let bottom = marginBottom ? SizeConverter.convertSize(marginBottom) : undefined;

    if (initMargin) {
      if (SizeConverter.isDirectional(initMargin)) {
        const value = SizeConverter.convertDirectionalSize(initMargin);

        left = value.left;
        right = value.right;
        top = value.top;
        bottom = value.bottom;
      } else {
        const value = SizeConverter.convertSize(initMargin);

        left = value;
        right = value;
        top = value;
        bottom = value;
      }
    }

    return {
      marginStart: start,
      marginEnd: end,
      marginLeft: left,
      marginRight: right,
      marginTop: top,
      marginBottom: bottom,
    };
  }, [initMargin, marginBottom, marginEnd, marginLeft, marginRight, marginStart, marginTop]);

  const gravity = useMemo(() => {
    let alignItems: ReactNativeStyle['alignItems'] = 'flex-start';
    let justifyContent: ReactNativeStyle['justifyContent'] = 'flex-start';

    if (initGravity) {
      if (typeof initGravity === 'number') {
        if ((initGravity & Gravity.TOP) > 0) alignItems = 'flex-start';
        if ((initGravity & Gravity.VERTICAL_CENTER) > 0) alignItems = 'center';
        if ((initGravity & Gravity.BOTTOM) > 0) alignItems = 'flex-end';
        if ((initGravity & Gravity.LEFT) > 0) justifyContent = 'flex-start';
        if ((initGravity & Gravity.CENTER) > 0) justifyContent = 'center';
        if ((initGravity & Gravity.RIGHT) > 0) justifyContent = 'flex-end';
      } else {
        if (initGravity.indexOf('top') !== -1) alignItems = 'flex-start';
        if (initGravity.indexOf('vertical-center') !== -1) alignItems = 'center';
        if (initGravity.indexOf('bottom') !== -1) alignItems = 'flex-end';
        if (initGravity.indexOf('left') !== -1) justifyContent = 'flex-start';
        if (initGravity.indexOf('center') !== -1 && initGravity.indexOf('vertical') === -1) justifyContent = 'center';
        if (initGravity.indexOf('right') !== -1) justifyContent = 'flex-end';

        if (initGravity === 'center-center') alignItems = 'center';
        if (initGravity.indexOf('middle') !== -1) alignItems = 'center';
      }
    }

    return {
      alignItems,
      justifyContent,
    };
  }, [initGravity]);

  const style = useMemo(() => [
    { width, height },
    padding,
    margin,
    {
      position,
      flexDirection: (align === 'vertical' ? 'column' : 'row') as ReactNativeStyle['flexDirection'],
    },
  ].flat(), [align, height, margin, padding, position, width]);

  if (scrollEnabled) {
    return (
      <ScrollView
        {...props}
        horizontal={align === 'horizontal'}
        style={[
          ...style,
          props.style,
        ]}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      {...props}
      style={[
        ...style,
        gravity,
        props.style,
      ]}
    >
      {children}
    </View>
  );
};

export default Box;
