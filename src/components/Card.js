import React, { Component } from 'react';
import styled from 'styled-components';
import cards from '../cards.png';
import back from '../back.png';

const suitEnum = {
  back: '-2px',
  clubs: '0',
  spades: '-98px',
  hearts: '-196px',
  diamonds: '-294px',
};

const valueEnum = {
  back: '0',
  A: '0',
  K: '-875px',
  Q: '-802px',
  J: '-730px',
  '2': '-72px',
  '3': '-146px',
  '4': '-218px',
  '5': '-291px',
  '6': '-364px',
  '7': '-438px',
  '8': '-511px',
  '9': '-583px',
  '10': '-657px',
};

const CardImage = styled.div`
    margin:1em;
    width: 74px;
    height: 97px;
    background: url(${props => (props.back ? back : cards)}) ${props => valueEnum[props.back ? 'back' : props.value]} ${props => suitEnum[props.back ? 'back' : props.suit]};
    border-radius:3px;
    ${props => props.back && 'background-size:cover;'}
`;

const Card = props => <CardImage {...props} />;

export default Card;
