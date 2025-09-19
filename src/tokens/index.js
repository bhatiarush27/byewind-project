// Design tokens index file
export { colors, cssVariables as colorVariables } from './colors';
export { spacing, spacingVariables } from './spacing';
export { typography, typographyVariables } from './typography';
export { shadows, shadowVariables } from './shadows';

// Import for internal use
import { cssVariables as colorVariables } from './colors';
import { spacingVariables } from './spacing';
import { typographyVariables } from './typography';
import { shadowVariables } from './shadows';

// Combined CSS variables for easy application
export const allCSSVariables = {
  light: {
    ...colorVariables.light,
    ...spacingVariables,
    ...typographyVariables,
    ...shadowVariables,
  },
  dark: {
    ...colorVariables.dark,
    ...spacingVariables,
    ...typographyVariables,
    ...shadowVariables,
  },
};
