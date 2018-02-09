import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { createDeck, shuffle } from '../cardUtils';

const Table = styled.div`
    background: linear-gradient(to bottom, #113d10 0%, #337630 100%);
    width:80%;
    height:50vh;
    min-height:600px;
    border-radius:0 0 50% 50%;
`;

export class GameBoard extends Component {
  state = {
    playerTurn: true,
  };

  render() {
    console.log(shuffle(createDeck()));
    return (
      <Table>
        <Card suit="spades" value="K" />
      </Table>
    );
  }
}

export default GameBoard;
