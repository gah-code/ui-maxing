/** @jsxImportSource theme-ui */
import { useThemeUI } from 'theme-ui';

const Card = ({ children }) => {
  const { theme } = useThemeUI();

  return (
    <div
      sx={{
        ...theme.styles.card,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
