/** @jsxImportSource theme-ui */
import { Link } from 'react';
import PropTypes from 'prop-types';

const navStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'background',
    color: 'text',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'primary',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    gap: '1.5rem',
  },
  navItem: {
    textDecoration: 'none',
    fontWeight: 'medium',
    color: 'text',
    '&:hover': {
      color: 'primary',
    },
  },
};

function NavigationBar({ links, logoText }) {
  return (
    <nav sx={navStyles.container}>
      <a href='/' sx={navStyles.logo}>
        {logoText}
      </a>
      <ul sx={navStyles.navList}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} sx={navStyles.navItem}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavigationBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  logoText: PropTypes.string.isRequired,
};

export default NavigationBar;
