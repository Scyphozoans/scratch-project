import React, { useContext, useEffect, useState , useRef, createRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import boardModel from '../../server/models/boardModel';
import { UserContext } from '../userContext';

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

const Links = styled(Link)`
  list-style-type: none;
  text-decoration: none;
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
  const { userBoards, setUserBoards, setCurrBoard } = useContext(UserContext)
  const createBoardRef = useRef(null)

  const navigate = useNavigate();

  // handleClick button to handle deletion of boards
  const handleClickDeleteBoard = async (el) => {
    console.log('deleted');
    console.log(el);


      try {
        const reponse = await fetch(`/board/${el.boardID}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      //  const data = await response.json() backend send deleted boardname plz
        setUserBoards((prevUserBoards) =>
        prevUserBoards.filter((board) => board[1] !== el.boardName)
      )
      } catch (err) {
        console.log(err);
      }
    };
  

  // self explanatory
  const handleClickDirectUserToCorrectBoard = async (e,boardObj) => {
    e.preventDefault()
    try {
      const response = await fetch(`/board?boardID=${boardObj.boardID}`, {
      });
      const data = await response.json()
      if(response.ok){
        console.log(data)
      }
    } catch (err) {
      console.log(err);
    }
    console.log(boardObj)
    
    //SEE wills NOTE IN BOARDPAGE
    // setCurrBoard((prev) => {
    //   prev.boardID = boardID
    //   prev.boardName = boardName}
    // )
    // navigate("/board");
  };

  // handleClick function to add new board to database and redirect you to new board
  const handleSubmit = (e) => {
    e.preventDefault()
    async function postNewBoard() {
      try {
        const response = await fetch('/board/create', {
          method: 'POST',
          body: JSON.stringify({
            boardName: createBoardRef.current.value,
            users: 'test',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const data = await response.json()
        if(response.ok){
          setUserBoards([...userBoards,[data._id,data.boardName]])
        }
      } catch (err) {
        console.log(err);
      }
    }
    postNewBoard();
    // navigate('/board');
  };

  

  return (
    <SelectBoards>
      <Header>Scrummies</Header>
      <div>
        {userBoards.map((el, i) => {
          const obj = Object.keys(el)
          return (
          <Links key={i} name={el[obj[1]]} onClick={(e) => handleClickDirectUserToCorrectBoard(e, { boardName: el[obj[1]], boardID: el[obj[0]]})}  >
            {el[obj[1]]}
            <button onClick={(e) => handleClickDeleteBoard({ boardName: el[obj[1]], boardID: el[obj[0]]})}>X</button>
          </Links>
          )
})}
        {/* <Link to="/board">Create new board</Link> */}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="boardname" // TODO: not sure if this is the correct property from body
            ref={createBoardRef}
            placeholder="board name..."
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
