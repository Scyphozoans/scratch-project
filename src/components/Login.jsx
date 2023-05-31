import React from 'react';
import styled from 'styled-components';

const LoginPage = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
`;

const LoginBox = styled.div`
background-color: #ffffff;
background-image: linear-gradient(
    rgba(0, 0, 0, 0.05) 0.1em,
    transparent 0.1em
  ),
  linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em);
background-size: 0.7em 0.7em;
width: 600px;
height 500px;
place-self: center;
`;

const Login = () => {
  return (
    <LoginPage>
      <form method="post">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="create user"></input>
      </form>
    </LoginPage>
  );
};

export default Login;
