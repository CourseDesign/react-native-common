import React, { PropsWithChildren } from 'react';

import { Text } from 'react-native';

import TypographyProps from './TypographyProps';
import useTypographyStyle from './useTypographyStyle';
import { useTheme } from '../../hooks';

/**
 * 기존 `react-native`의 `Text`를 대체합니다.
 * 미리 등록된 `theme`의 `TypographySheet`중 하나의 스타일로 텍스트를 보여줍니다.
 * @param __namedParameters `ReactElement`를 만들기 위한 `props`입니다. {@link TypographyProps}을 참고해주세요
 * @return `React.Text`를 리턴합니다.
 * @category component
 */
const Typography = ({
  type = 'body3',
  children,
  ...props
}: PropsWithChildren<TypographyProps>): JSX.Element => {
  const theme = useTheme();
  const textStyle = useTypographyStyle(theme.typography[type]);

  return (
    <Text
      {...props}
      style={[textStyle, props.style]}
    >
      {children}
    </Text>
  );
};

export default Typography;
