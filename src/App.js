import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

const containerStyle = {
  paddingTop: 20
};

class App extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <SearchBar />
        <WeatherList />
      </Container>
    );
  }
}

export default App;
