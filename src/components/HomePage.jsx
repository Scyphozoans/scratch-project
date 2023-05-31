import React from 'react';
import { Link } from 'react-router-dom';
import UserBoards from './UserBoards';
import styled from 'styled-components';

const Page = styled.div`
  font-family: 'Abril Fatface', cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #ffffff;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 0.1em,
      transparent 0.1em
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em);
  background-size: 0.7em 0.7em;
  border-bottom: 2px solid black;
`;

const Li = styled.li`
  list-style-type: none;
  display: inline;
  font-size: 2rem;
`;

const LogOut = styled(Link)`
  font-size: 2rem;
`;

/********************************* Component **************************************/
const HomePage = () => {
  return (
    <Page>
      <Header>
        <Li>User</Li>
        <LogOut to="/">Log out</LogOut>
      </Header>
      <UserBoards></UserBoards>
    </Page>
  );
};

export default HomePage;
