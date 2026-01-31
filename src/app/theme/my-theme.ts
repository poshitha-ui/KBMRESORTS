// src/app/theme/my-theme.ts

import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#fff4eb',
      100: '#ffe6d4',
      200: '#ffcaa8',
      300: '#ffad7a',
      400: '#f8924e',
      500: '#ea7d1e',
      600: '#d56f18',
      700: '#b55d12',
      800: '#944b0d',
      900: '#7a3d09'
    },
    surface: {
      0:   '#ffffff',
      50:  '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b'
    }
  }
});
