import PaletteColor from './PaletteColor';
import Color from './Color';
import CommonColors from './CommonColors';
import TextColor from './TextColor';

interface Palette {
  common: CommonColors;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  success: PaletteColor;
  text: TextColor
  grey: Color;
}

export default Palette;
