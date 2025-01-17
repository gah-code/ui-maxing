// src/components/layout/Provider.jsx
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { ThemeUIProvider } from 'theme-ui';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { useThemedStylesWithMdx } from '@theme-ui/mdx';
import Prism from '@theme-ui/prism';
import theme from '../../theme';
// import NavigationBar from './NavBar';

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/blog', label: 'Blog' },
//   { href: '/contact', label: 'Contact' },
// ];

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};

function Provider({ children }) {
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(components)
  );

  return (
    <ThemeUIProvider theme={theme}>
      <MDXProvider components={componentsWithStyles}>
        {/* <NavigationBar links={navLinks} logoText='UI Maxing' /> */}
        {children}
      </MDXProvider>
    </ThemeUIProvider>
  );
}

// Prop type validation for the 'children' prop
Provider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that 'children' is passed and is a valid React node
};

export default Provider;
