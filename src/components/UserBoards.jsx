import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
/* TODO: need to require correct model/database */

const gridAnimation = keyframes`
  0% { background-position:  0%; }
  100% {background-position: bottom; }
`;

const Header = styled.header`
  font-size: 3rem;
  margin: 0 0 20px 0;
`;

const SelectBoards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 150px 0 0 450px; // TODO: Shouldn't hardcode pixels
  padding: 30px 50px 20px 50px;
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
  justify-content: space-between;
  gap: 0.5rem;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 0.1em,
      transparent 0.1em
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em);
  background-size: 0.7em 0.7em;
`;

/********************************* Component **************************************/

const Boards = () => {
  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   async function fetchBoardNames() {
  //     try {
  //       const names = await Model.find({
  //         name: name;
  //       })
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  // }
  //   fetchBoardNames();
  // }, []);
  const names = [1, 2, 3];
  // const handleClick() {

  // }

  return (
    <SelectBoards>
      <Header>Scrummies</Header>
      <div>
        {names.map((e, i) => (
          <Li>
            {e}
            <button onClick={() => deleteBoard()}>X</button>
          </Li>
        ))}
        <button>+</button>
        <Link to="/board">Create new board</Link>
      </div>
    </SelectBoards>
  );
};

export default Boards;
