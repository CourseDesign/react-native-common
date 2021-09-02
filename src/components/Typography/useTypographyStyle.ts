import TypographyStyle from './TypographyStyle';
import { Typography } from '../../types';
import { makeStyle } from '../../hooks';

/**
 * `Typography`스타일을 사용할 수 있게 해주는 `hook`입니다.
 * @param typography {Typography} `theme`의 `Typography`스타일입니다.
 * @return {TypographyStyle} `React.Component`의 `Style`입니다.
 */
const useTypographyStyle = makeStyle((_, typography: Typography): TypographyStyle => {
  const fontFamily = typography.font;
  const fontWeight = typography.weight;
  const fontSize = typography.size;
  const lineHeight = typography.height;
  const letterSpacing = typography.spacing;

  return {
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
  };
});

export default useTypographyStyle;
