import React, { Component } from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';

const AppWrapper = styled.main`
  display:flex;
  justify-content:center;
  background-image: url("http://atelier-theater.com/wp-content/uploads/2017/08/3d-wood-table-top-background-with-tabletop-backgroundwood-tops-for-sale-toronto--wooden-ideas.jpg");
  background-color: #cccccc;
  height:auto;
  min-height:100vh;
  padding-bottom:1em;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GameBoard />
      </AppWrapper>
    );
  }
}

export default App;
