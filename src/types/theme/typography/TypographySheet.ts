import Typography from './Typography';

/**
 * `Typography`스타일이 정의된 테이블입니다.
 * `head`, `body`, `button`, `caption`으로 이루어져 있습니다.
 * 숫자가 작을수록, 더 `primary`한 스타일입니다.
 * 이 `interface`에서 지칭하는 `Typography`는 {@link types/theme/typography/Typography Typography}입니다.
 */
interface TypographySheet {
  /**
   * 첫번째 `head`스타일 입니다.
   */
  h1: Typography;
  /**
   * 두번째 `head`스타일 입니다.
   */
  h2: Typography;
  /**
   * 세번째 `head`스타일 입니다.
   */
  h3: Typography;
  /**
   * 네번째 `head`스타일 입니다.
   */
  h4: Typography;
  /**
   * 다섯번째 `head`스타일 입니다.
   */
  h5: Typography;
  /**
   * 여섯번째 `head`스타일 입니다.
   */
  h6: Typography;

  /**
   * 첫번째 `body`스타일 입니다.
   */
  body1: Typography;
  /**
   * 두번째 `body`스타일 입니다.
   */
  body2: Typography;
  /**
   * 세번째 `body`스타일 입니다.
   */
  body3: Typography;
  /**
   * 네번째 `body`스타일 입니다.
   */
  body4: Typography;
  /**
   * 다섯번째 `body`스타일 입니다.
   */
  body5: Typography;
  /**
   * 여섯번째 `body`스타일 입니다.
   */
  body6: Typography;

  /**
   * 첫번째 `button`스타일 입니다.
   */
  button1: Typography;
  /**
   * 두번째 `button`스타일 입니다.
   */
  button2: Typography;
  /**
   * 세번째 `button`스타일 입니다.
   */
  button3: Typography;

  /**
   * 첫번째 `caption`스타일 입니다.
   */
  caption1: Typography;
  /**
   * 두번째 `caption`스타일 입니다.
   */
  caption2: Typography;
}

export default TypographySheet;
