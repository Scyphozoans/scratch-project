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

// const UserBoardss = styled.UserBoards`
//   display: flex;
//   justify-content: center;
// `;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  list-style-type: none;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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

const HomePage = () => {
  return (
    <Page>
      <Header>
        <nav>
          <Li>User</Li>
          <Link to="/">Log out</Link>
        </nav>
      </Header>
      <UserBoards></UserBoards>
    </Page>
  );
};

export default HomePage;
