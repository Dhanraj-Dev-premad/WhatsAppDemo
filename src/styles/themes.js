export const lightTheme = {
  colors: {
    primary: '#0857A0',
    secondary: '#648DDB',
    background: '#F7F7FC',
     //background: 'pink',
    card: '#F5F5F5',
    text: '#121222',
    border: '#DDDDDD',
    error: '#FF0000',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  radius: {
    sm: 6,
    md: 12,
    lg: 20,
  },
};

export const darkTheme = {
  colors: {
    primary: '#648DDB',
    secondary: '#0857A0',
    background: '#121222',
    card: '#242438',
    text: '#FFFFFF',
    border: '#44445A',
    error: '#FF6B6B',
  },

  spacing: lightTheme.spacing,
  radius: lightTheme.radius,
};