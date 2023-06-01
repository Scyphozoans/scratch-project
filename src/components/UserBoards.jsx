import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import boardModel from '../../server/models/boardModel';

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
  margin: auto;
  margin-top: 150px; // TODO: Shouldn't hardcode pixels
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

const Button = styled.button`
  /* margin: 20px 0 0 50px; // TODO: Should not hard code pixels; */
  cursor: pointer;
  background-color: #fea6f6;
  text-align: center;
  /* font-size: 2rem; */
  border-radius: 2rem;
  border: 1px solid black;
  box-shadow: 2px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;
  transform: translate(-2px, -2px);
  &:hover {
    transform: translate(0, 0);
    box-shadow: 0px 0px;
  }
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

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 3%;
`;

const Input = styled.input`
  border: 2px solid black;
  background-color: white;
  box-shadow: 5px 5px black;
  margin: 10px;
  padding: 0.5rem;
`;

/********************************* Component **************************************/

const Boards = () => {
  const [boardName, setBoardName] = useState('');
  const names = ['Scrummy 1', 'Scrummy 2', 'Scrummy 3'];
  const navigate = useNavigate();

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

  // handleClick button to handle deletion of boards
  const handleClickDeleteBoard = (e) => {
    console.log('deleted');
    console.log(e);
    async function deleteBoard() {
      try {
        const reponse = await fetch(`/board/${boardName}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  // handleClick function to add new board to database and redirect you to new board
  const handleSubmit = () => {
    async function postNewBoard() {
      try {
        const response = await fetch('/board/create', {
          method: 'POST',
          body: JSON.stringify({
            boardname: boardName,
            users: 'test',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
    postNewBoard();
    navigate('/board');
  };

  return (
    <SelectBoards>
      <Header>Scrummies</Header>
      <div>
        {names.map((e, i) => (
          <Li key={i}>
            {e}
            <button onClick={(e) => handleClickDeleteBoard(e)}>X</button>
          </Li>
        ))}
        {/* <Link to="/board">Create new board</Link> */}
        <Form onSubmit={() => handleSubmit()}>
          <Input
            type="text"
            name="boardName" // TODO: not sure if this is the correct property from body
            placeholder="board name..."
            onChange={(e) => setBoardName(e.target.value)}
          ></Input>
          <Button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
            </svg>
          </Button>
        </Form>
      </div>
    </SelectBoards>
  );
};

export default Boards;
