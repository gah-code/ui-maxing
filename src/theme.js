// // src/theme.js
// import { merge } from 'theme-ui';
// import nightOwl from '@theme-ui/prism/presets/night-owl';

// const customTheme = {
//   styles: {
//     pre: {
//       backgroundColor: '#011627', // Ensure dark background
//       padding: '20px',
//       borderRadius: '5px',
//     },
//     code: {
//       ...nightOwl,
//     },
//   },
// };

// const theme = merge(nightOwl, customTheme);

// export default theme;
/** @jsxImportSource theme-ui */

// import { merge } from 'theme-ui';
// import nightOwl from '@theme-ui/prism/presets/night-owl';

// const customTheme = {
//   styles: {
//     pre: {
//       backgroundColor: '#011627', // Ensure dark background
//       padding: '20px',
//       borderRadius: '5px',
//       overflowX: 'auto', // Ensure horizontal scrolling for long code lines
//     },
//     code: {
//       fontSize: '0.9rem',
//       fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
//       ...nightOwl, // Merge nightOwl theme styles here
//     },
//   },
// };

// // Merge the custom theme with the nightOwl preset
// const theme = merge(nightOwl, customTheme);

// export default theme;

import { merge } from 'theme-ui';
import nightOwl from '@theme-ui/prism/presets/night-owl';

const customTheme = {
  colors: {
    text: '#d6deeb',
    background: '#011627',
    primary: '#82aaff',
    secondary: '#c792ea',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  styles: {
    h1: {
      color: 'primary',
      fontSize: [5, 6], // responsive font sizes
      fontFamily: 'heading',
      lineHeight: '1.2',
      marginBottom: '20px',
    },
    h2: {
      color: 'primary',
      fontSize: [4, 5],
      fontFamily: 'heading',
      marginBottom: '15px',
    },
    p: {
      color: 'text',
      fontSize: 3,
      fontFamily: 'body',
      lineHeight: '1.75',
      marginBottom: '1rem',
    },
    a: {
      color: 'secondary',
      textDecoration: 'underline',
      '&:hover': {
        color: 'primary',
      },
    },
    blockquote: {
      fontStyle: 'italic',
      color: 'secondary',
      paddingLeft: '20px',
      borderLeft: '5px solid',
      borderColor: 'primary',
      marginBottom: '20px',
    },
    pre: {
      backgroundColor: '#2222',
      padding: '20px',
      borderRadius: '5px',
      overflowX: 'auto', // Ensure horizontal scrolling for long code lines
    },
    code: {
      fontSize: '1rem',
      fontFamily: 'monospace',
      ...nightOwl, // Use nightOwl theme for syntax highlighting
    },
  },
};

// Merge the custom theme with the nightOwl preset
const theme = merge(nightOwl, customTheme);

export default theme;
