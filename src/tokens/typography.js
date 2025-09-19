// Typography tokens for consistent text styling
export const typography = {
  // Font families
  fontFamily: {
    primary: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    secondary: '"Roboto Mono", "Monaco", "Menlo", monospace',
  },
  
  // Font sizes
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
    xxxxl: '48px',
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

// CSS custom properties for typography
export const typographyVariables = {
  '--font-family-primary': typography.fontFamily.primary,
  '--font-family-secondary': typography.fontFamily.secondary,
  
  '--font-size-xs': typography.fontSize.xs,
  '--font-size-sm': typography.fontSize.sm,
  '--font-size-md': typography.fontSize.md,
  '--font-size-lg': typography.fontSize.lg,
  '--font-size-xl': typography.fontSize.xl,
  '--font-size-xxl': typography.fontSize.xxl,
  '--font-size-xxxl': typography.fontSize.xxxl,
  '--font-size-xxxxl': typography.fontSize.xxxxl,
  
  '--font-weight-light': typography.fontWeight.light,
  '--font-weight-normal': typography.fontWeight.normal,
  '--font-weight-medium': typography.fontWeight.medium,
  '--font-weight-semibold': typography.fontWeight.semibold,
  '--font-weight-bold': typography.fontWeight.bold,
  '--font-weight-extrabold': typography.fontWeight.extrabold,
  
  '--line-height-tight': typography.lineHeight.tight,
  '--line-height-normal': typography.lineHeight.normal,
  '--line-height-relaxed': typography.lineHeight.relaxed,
  
  '--letter-spacing-tight': typography.letterSpacing.tight,
  '--letter-spacing-normal': typography.letterSpacing.normal,
  '--letter-spacing-wide': typography.letterSpacing.wide,
};
