import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';

export class ToggleTheme extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme, isLightTheme, light, dark } = this.context;
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
  }
}

export default ToggleTheme;
