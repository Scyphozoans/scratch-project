import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const gridAnimation = keyframes`
  0% { background-position:  0%; }
  100% {background-position: bottom; }
`;

const Header = styled.header`
  font-size: 2rem;
`;

const SelectBoards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 200px; // TODO: Shouldn't hardcode pixels
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
  box-shadow: 5px 5px black;
  background-image: linear-gradient(#a6faff 0.1em, transparent 0.1em),
    linear-gradient(90deg, #a6faff 0.1em, transparent 0.1em);
  width: 30vw;
  background-size: 0.7em 0.7em;
  animation-name: ${gridAnimation};
  animation-duration: 40s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Li = styled.li`
  list-style-type: none;
  border: 2px solid black;
  background-color: white;
  box-shadow: 5px 5px black;
  margin: 10px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 0.1em,
      transparent 0.1em
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em);
  background-size: 0.7em 0.7em;
`;

const Boards = () => {
  return (
    <SelectBoards>
      <Header>Scrummies</Header>
      <div>
        <Li>Scrummie 1</Li>
        <Li>Scrummie 2</Li>
        <Li>Scrummie 3</Li>
        <Link to="/board">Create new board</Link>
      </div>
    </SelectBoards>
  );
};

export default Boards;
