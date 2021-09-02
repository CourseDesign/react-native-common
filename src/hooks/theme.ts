import { createTheming } from '@callstack/react-theme-provider';
import DefaultTheme from '../constants/DefaultTheme';

export const { ThemeProvider, withTheme, useTheme } = createTheming(DefaultTheme);
