import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  };
  toggleAuthentication = () => {
    this.setState({
      isAuthenticated: !this.state.isAuthenticated
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, isAuthenticated: this.toggleAuthentication }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
