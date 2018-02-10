import React from 'react';
import styled from 'styled-components';
import Score from './Score';

const Board = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
`;

const ScoreBoard = ({ scores }) => (
  <Board>
    <Score user="Dealer" score={scores.dealer} />
    <Score user="Player" score={scores.player} />
  </Board>
);

export default ScoreBoard;
