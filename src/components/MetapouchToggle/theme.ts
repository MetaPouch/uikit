import { darkColors, lightColors } from '../../theme/colors';
import { MetapouchToggleTheme } from './types';

export const light: MetapouchToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled
};

export const dark: MetapouchToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled
};
