// Shadow tokens for consistent elevation and depth
export const shadows = {
  // Elevation shadows
  elevation: {
    0: 'none',
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
  },
  
  // Component-specific shadows
  component: {
    card: '0 2px 8px rgba(0, 0, 0, 0.1)',
    cardHover: '0 4px 16px rgba(0, 0, 0, 0.15)',
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
    buttonHover: '0 4px 8px rgba(0, 0, 0, 0.15)',
    modal: '0 8px 32px rgba(0, 0, 0, 0.2)',
    dropdown: '0 4px 12px rgba(0, 0, 0, 0.15)',
    tooltip: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  
  // Focus shadows
  focus: {
    primary: '0 0 0 3px rgba(33, 150, 243, 0.3)',
    secondary: '0 0 0 3px rgba(76, 175, 80, 0.3)',
    error: '0 0 0 3px rgba(244, 67, 54, 0.3)',
  },
  
  // Inset shadows
  inset: {
    light: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
    dark: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
  },
};

// CSS custom properties for shadows
export const shadowVariables = {
  '--shadow-elevation-0': shadows.elevation[0],
  '--shadow-elevation-1': shadows.elevation[1],
  '--shadow-elevation-2': shadows.elevation[2],
  '--shadow-elevation-3': shadows.elevation[3],
  '--shadow-elevation-4': shadows.elevation[4],
  '--shadow-elevation-5': shadows.elevation[5],
  
  '--shadow-card': shadows.component.card,
  '--shadow-card-hover': shadows.component.cardHover,
  '--shadow-button': shadows.component.button,
  '--shadow-button-hover': shadows.component.buttonHover,
  '--shadow-modal': shadows.component.modal,
  '--shadow-dropdown': shadows.component.dropdown,
  '--shadow-tooltip': shadows.component.tooltip,
  
  '--shadow-focus-primary': shadows.focus.primary,
  '--shadow-focus-secondary': shadows.focus.secondary,
  '--shadow-focus-error': shadows.focus.error,
  
  '--shadow-inset-light': shadows.inset.light,
  '--shadow-inset-dark': shadows.inset.dark,
};
