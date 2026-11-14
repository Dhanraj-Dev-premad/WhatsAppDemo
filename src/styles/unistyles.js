import {StyleSheet} from 'react-native-unistyles';

import {lightTheme, darkTheme} from './themes';
import {breakpoints} from './breakpoints';

StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },

  breakpoints,

  settings: {
    initialTheme: 'light',
  },
});