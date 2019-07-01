import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';

const ToggleTheme = () => {
  const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          background: theme.bg,
          color: theme.syntax,
          border: 'none',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        Toggle the theme
      </button>
    </div>
  );
};

export default ToggleTheme;
