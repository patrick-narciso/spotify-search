import DesignSystem from 'design-system-utils';

const designTokens = {
  type: {
    regularFontFamily: 'Roboto, sans-serif',

    sizes: {
      xs: '14px',
      s: '16px',
      base: '18px',
      l: '24px',
      xl: '48px',
    },
  },

  colors: {
    colorPalette: {
      grey: {
        light: '#FAFAFA',
        dark: '#999999',
      },

      background: {
        base: '#000000',
      },
    },

    brand: {
      black: '#000000',
      white: '#FFFFFF',
      green: '#1DB954',
    },
  },

  breakpoints: {
    sm: '768px',
    xs: '415px',
    xxs: '320px',
  },
};

export default new DesignSystem(designTokens, {
  fontSizeUnit: 'rem',
});
