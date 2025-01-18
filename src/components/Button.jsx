/** @jsxImportSource theme-ui */
import { useThemeUI } from 'theme-ui';

const Button = ({ children, variant = 'primary', ...props }) => {
  const { theme } = useThemeUI();

  return (
    <button
      {...props}
      sx={{
        ...theme.buttons[variant],
      }}
    >
      {children}
    </button>
  );
};

export default Button;
