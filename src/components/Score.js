import React from 'react';
import styled from 'styled-components';

const ScoreWrapper = styled.div`
    display:flex;
    flex-flow:column nowrap;
`;

const UserName = styled.h2`
    color:white;
    text-align:center;
    margin:0.5em;
`;

const ScoreValue = UserName.withComponent('span');

const Score = ({ score, user }) => (
  <ScoreWrapper>
    <UserName>{user}</UserName>
    <ScoreValue>{score}</ScoreValue>
  </ScoreWrapper>
);

export default Score;
