import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <ThemeContext.Consumer>
              {themeContext => {
                const { isAuthenticated, toggleAuthentication } = authContext;
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                  <nav
                    className="navbar"
                    style={{ background: theme.bg, color: theme.syntax }}
                  >
                    <h1>Context API</h1>
                    <div onClick={toggleAuthentication}>
                      {isAuthenticated ? 'Logged In' : 'Logged out'}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
