import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
export class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="booklist"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>The way of kings</li>
          <li style={{ background: theme.ui }}>The winds of glory</li>
          <li style={{ background: theme.ui }}>The final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
