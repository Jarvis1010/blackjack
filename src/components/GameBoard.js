import React, { Component } from 'react';
import styled from 'styled-components';

const Table = styled.div`
    background: linear-gradient(to bottom, #113d10 0%, #337630 100%);
    width:80%;
    height:50vh;
    min-height:600px;
    border-radius:0 0 50% 50%;
`;

export class GameBoard extends Component {
  render() {
    return <Table />;
  }
}

export default GameBoard;
