import React from 'react';
import UserCards from './UserCards';
import styled from 'styled-components';

const Area = styled.div`
    display:flex;
    flex-flow:column nowrap;
`;

const PlayingArea = ({ playerTurn, cards, deck }) => (
  <Area>
    {Object.keys(cards).map(key => {
      const userCards = cards[key].map(index => deck[index]);
      return (
        <UserCards
          key={key}
          user={key}
          cards={userCards}
          playerTurn={playerTurn}
        />
      );
    })}
  </Area>
);

export default PlayingArea;
