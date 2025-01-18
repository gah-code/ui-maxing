import { merge } from 'theme-ui';
import nightOwl from '@theme-ui/prism/presets/night-owl';

const customTheme = {
  colors: {
    text: '#d6deeb',
    background: '#011627',
    primary: '#82aaff',
    secondary: '#c792ea',

    buttonText: '#fff',
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
    card: {
      padding: '1.5rem',
      backgroundColor: 'cardBg',
      border: '1px solid',
      borderColor: 'cardBorder',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '1rem auto',
    },
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      color: 'buttonText',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'secondary',
      },
    },
    secondary: {
      backgroundColor: 'secondary',
      color: 'buttonText',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'primary',
      },
    },
  },
};

// Merge the custom theme with the nightOwl preset
const theme = merge(nightOwl, customTheme);

export default theme;
