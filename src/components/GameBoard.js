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

const PlayerButton = StartGame.extend`
    margin:1em;
    ${props => props.disabled && `color:#eee;
        border-color:#eee;
        background:rgba(255,255,255,0.05);
        `}
`;

const EndGame = styled.span`
    margin-top:1em;
    transform: rotate(-30deg);
    color:white;
    font-size:100px;
    font-weight:bold;
    font-family:"Comic Sans MS", "Comic Sans", cursive;
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
    playerLose: false,
    scores: {
      player: 0,
      dealer: 0,
    },
    cards: {
      dealer: [],
      player: [],
    },
  };

  componentDidUpdate(lastProps, lastState) {
    if (
      lastState.cards !== this.state.cards ||
      lastState.playerTurn !== this.state.playerTurn
    ) {
      this.calculateScore();
    }
  }

  calculateScore = () => {
    const { playerTurn, cards, deck: { masterDeck } } = this.state;
    const dealer = playerTurn
      ? masterDeck[cards.dealer[0]].value
      : cards.dealer.reduce((acc, index) => acc + masterDeck[index].value, 0);
    const player = cards.player.reduce(
      (acc, index) => acc + masterDeck[index].value,
      0
    );

    this.setState({ scores: { dealer, player } }, () => this.checkScores());
  };

  checkScores = () => {
    const { scores } = this.state;
    if (scores.player > 21) {
      this.setState({ playerLose: true });
    }
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

  handleHit = () => {
    this.deal(player);
  };

  handleHold = () => {
    this.setState({ playerTurn: false });
  };

  render() {
    const {
      scores,
      gameStarted,
      cards,
      playerTurn,
      playerLose,
      deck: { masterDeck: deck },
    } = this.state;
    return (
      <Table>
        <ScoreBoard scores={scores} />
        {!gameStarted &&
          <StartGame onClick={this.handleStartGame}>Press to Begin</StartGame>}
        {!playerLose &&
        gameStarted && [
          <PlayingArea {...{ playerTurn, cards, deck }} />,
          <div>
            <PlayerButton disabled={!playerTurn} onClick={this.handleHit}>
              Hit?
            </PlayerButton>
            <PlayerButton disabled={!playerTurn} onClick={this.handleHold}>
              Hold?
            </PlayerButton>
          </div>,
        ]}
        {playerLose && <EndGame>You Lose!!!</EndGame>}
      </Table>
    );
  }
}

export default GameBoard;
