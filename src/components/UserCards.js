import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Area = styled.div`
    margin-top:1em;
`;

const Cards = styled.div`
    display:flex;
    justify-content:center;
`;

const Title = styled.h3`
    color:white;
    text-align:center;
    width:100%;
`;

const PlayingArea = ({ playerTurn, cards, user }) => (
  <Area>
    <Title>{`${user[0].toUpperCase() + user.substring(1)}'s Hand`}</Title>
    <Cards>
      {cards.map((card, index) => (
        <Card
          key={card.suit + card.face}
          suit={card.suit}
          value={card.face}
          back={playerTurn && user === 'dealer' && index === 1}
        />
      ))}
    </Cards>
  </Area>
);

export default PlayingArea;
