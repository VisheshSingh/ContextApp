import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav
        className="navbar"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <h1>Context API</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
