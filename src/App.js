import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductDisplay from './ProductDisplay'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ProductDisplay/>
      </MuiThemeProvider>
    );
  }
}

export default App;
