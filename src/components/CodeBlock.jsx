// import React from 'react';
// import '../css/prism.css'; // Ensure this imports your custom Prism styles

// const codeExample = `
//   // Example JavaScript Code
//   const greeting = 'Hello, World!';

//   function sayHello(name) {
//     return \`\${greeting} \${name}\`;
//   }

//   console.log(sayHello('Prism.js'));
// `;

// const CodeBlock = () => {
//   return (
//     <div className='code-block-container'>
//       <h2>Styled Code Block Example</h2>
//       <pre className='language-js'>
//         <code className='language-js'>{codeExample}</code>
//       </pre>
//     </div>
//   );
// };

// export default CodeBlock;

/** @jsxImportSource theme-ui */
// import React from 'react';
import { useThemeUI } from 'theme-ui';
// import './css/prism.css';

const codeExample = `
  // Example JavaScript Code
  const greeting = 'Hello, World!';

  function sayHello(name) {
    return \`\${greeting} \${name}\`;
  }

  console.log(sayHello('Theme UI!'));
`;

const CodeBlock = () => {
  const { theme } = useThemeUI();

  return (
    <pre sx={theme.styles.pre}>
      <code sx={theme.styles.code}>{codeExample}</code>
    </pre>
  );
};

export default CodeBlock;
