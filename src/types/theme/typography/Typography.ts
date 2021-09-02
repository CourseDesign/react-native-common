import { TextStyle } from 'react-native';

/**
 * `Typography`의 스타일을 정의하기 위한 타입입니다.
 */
interface Typography {
  /**
   * `font`의 이름입니다.
   */
  font: string;
  /**
   * `font`의 굵기를 결정합니다.
   */
  weight: TextStyle['fontWeight'];
  /**
   * `font`의 크기를 결정합니다.
   */
  size: number;
  /**
   * `font`의 높이를 결정합니다.
   */
  height: number;
  /**
   * `font`의 자간을 결정합니다.
   */
  spacing: number;
}

export default Typography;
