import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import PlayingArea from './PlayingArea';
import { createDeck, shuffle } from '../cardUtils';

const Table = styled.div`
    background: linear-gradient(to bottom, #113d10 0%, #337630 100%);
    width:80%;
    height:50vh;
    min-height:600px;
    border-radius:0 0 50% 50%;
    display:flex;
    flex-flow:column nowrap;
    align-items:center;
`;

const StartGame = styled.button`
    width:100px;
    height:50px;
    margin:auto;
    border:1px solide white;
    color:white;
    background:transparent;
`;

const player = 'player';
const dealer = 'dealer';

export class GameBoard extends Component {
  state = {
    deck: {
      masterDeck: shuffle(createDeck()),
      start: 0,
    },
    gameStarted: false,
    playerTurn: true,
    scores: {
      player: 0,
      dealer: 0,
    },
    cards: {
      dealer: [],
      player: [],
    },
  };

  handleStartGame = () => {
    this.setState({ gameStarted: true });
    this.deal(dealer, 2);
    this.deal(player, 2);
  };

  deal = (user, numCards = 1) => {
    this.setState(state => {
      const { start } = state.deck;
      const { cards } = state;
      let userCards = cards[user];
      for (let i = start; i < start + numCards; i++) {
        userCards = userCards.concat(i);
      }
      return {
        deck: { ...state.deck, start: start + numCards },
        cards: { ...cards, [user]: userCards },
      };
    });
  };

  render() {
    const {
      scores,
      gameStarted,
      cards,
      playerTurn,
      deck: { masterDeck: deck },
    } = this.state;
    return (
      <Table>
        <ScoreBoard scores={scores} />
        {!gameStarted &&
          <StartGame onClick={this.handleStartGame}>Press to Begin</StartGame>}
        {gameStarted && <PlayingArea {...{ playerTurn, cards, deck }} />}
      </Table>
    );
  }
}

export default GameBoard;
