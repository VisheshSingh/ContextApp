import React, { Component } from 'react';

export class BookList extends Component {
  render() {
    return (
      <div className="booklist">
        <ul>
          <li>The way of kings</li>
          <li>The winds of glory</li>
          <li>The final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
