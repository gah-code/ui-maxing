// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ThemeUIProvider } from 'theme-ui';
// import { MDXProvider } from '@mdx-js/react';
// import theme from './theme';
// import components from './components';
// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeUIProvider theme={theme}>
//       <MDXProvider components={components}>
//         <App />
//       </MDXProvider>
//     </ThemeUIProvider>
//   </React.StrictMode>
// );

// src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // import './index.css';
// import Provider from './components/layout/Provider';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Provider from './components/layout/Provider'; // Wrap App with Theme and MDX provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
