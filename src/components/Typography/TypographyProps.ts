import { TextProps } from 'react-native';

import { TypographySheet } from '../../types';

/**
 * `Typography`컴포넌트의 `props`타입입니다.
 * `TextProps`에 `type` 필드가 하나 추가되었습니다.
 */
interface TypographyProps extends TextProps {
  /**
   * `Typography`스타일을 보관하는 일종의 `Map<string, Typography>`타입입니다.
   * {@link TypographySheet}에서 어떤 스타일이 정의되어있는지 확인하세요.
   */
  type?: keyof TypographySheet;
}

export default TypographyProps;
