import TypographySheet from '../typography/TypographySheet';

type TextColor = {
  [key in keyof TypographySheet]: string;
};

export default TextColor;
