import Palette from './color/Palette';
import TypographySheet from './typography/TypographySheet';
import Spacing from './spacing/Spacing';
import Animation from './animation/Animation';
import ShadowSheet from './shadow/ShadowSheet';
import ShapeSheet from './shape/ShapeSheet';

/**
 * `theme`타입입니다. 색상, 글꼴, 여백, 애니메이션, 그림자, 모양으로 구분됩니다.
 */
interface Theme {
  palette: Palette;
  typography: TypographySheet;
  spacing: Spacing;
  animation: Animation;
  shadow: ShadowSheet;
  shape: ShapeSheet;
}

export default Theme;
