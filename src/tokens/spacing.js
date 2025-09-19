// Spacing tokens for consistent spacing throughout the application
export const spacing = {
  // Base spacing unit (8px)
  base: 8,
  
  // Spacing scale
  xs: 4,    // 0.25rem
  sm: 8,    // 0.5rem
  md: 16,   // 1rem
  lg: 24,   // 1.5rem
  xl: 32,   // 2rem
  xxl: 48,   // 3rem
  xxxl: 64,  // 4rem
  
  // Specific spacing values
  padding: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  margin: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  // Gap values
  gap: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  
  // Border radius
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '50%',
  },
};

// CSS custom properties for spacing
export const spacingVariables = {
  '--spacing-xs': spacing.xs + 'px',
  '--spacing-sm': spacing.sm + 'px',
  '--spacing-md': spacing.md + 'px',
  '--spacing-lg': spacing.lg + 'px',
  '--spacing-xl': spacing.xl + 'px',
  '--spacing-xxl': spacing.xxl + 'px',
  '--spacing-xxxl': spacing.xxxl + 'px',
  
  '--radius-xs': spacing.radius.xs,
  '--radius-sm': spacing.radius.sm,
  '--radius-md': spacing.radius.md,
  '--radius-lg': spacing.radius.lg,
  '--radius-xl': spacing.radius.xl,
  '--radius-full': spacing.radius.full,
};
