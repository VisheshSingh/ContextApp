import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBook] = useState([
    { title: 'The way of kings', id: uuid.v4() },
    { title: 'The winds of glory', id: uuid.v4() },
    { title: 'The final empire', id: uuid.v4() }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
