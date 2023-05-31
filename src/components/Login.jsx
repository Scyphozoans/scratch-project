import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const gridAnimation = keyframes`
  0% { background-position:  0%; }
  100% {background-position: bottom; }
`;
const LoginPage = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  background-image: linear-gradient(#a6faff 0.1em, transparent 0.1em),
    linear-gradient(90deg, #a6faff 0.1em, transparent 0.1em);
  background-size: 0.7em 0.7em;
  animation-name: ${gridAnimation};
  animation-duration: 40s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Form = styled.form`
  border: 2px solid black;
  background-color: white;
  box-shadow: 5px 5px black;
  gap: 0.5rem;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 0.1em,
      transparent 0.1em
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em);
  background-size: 0.7em 0.7em;

  display: grid;
  padding: 1rem;
  border-radius: 2rem;
  place-self: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid black;
  font-size: 1.25rem;
  background-color: #a6faff;
  box-shadow: 2px 2px black;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;
  transform: translate(-2px, -2px);
  &:hover:not([disabled]) {
    transform: translate(0px, 0px);
    box-shadow: 0px 0px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #d1d5db;
  }
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 2rem;
  color: black;
  font-size: 1.5rem;
  padding: 0.75rem 3rem 0.75rem 1.5rem;
`;

const Login = () => {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <LoginPage>
      <Form method="post" onSubmit={handleSubmit}>
        <Input
          name="username"
          ref={usernameRef}
          type="text"
          placeholder="username"
        ></Input>
        <Input
          name="password"
          ref={passwordRef}
          type="password"
          placeholder="password"
        ></Input>
        <Button type="submit" value="log in">
          Log In
        </Button>
        <Button value="sign up">Sign Up</Button>
      </Form>
    </LoginPage>
  );
};

export default Login;
