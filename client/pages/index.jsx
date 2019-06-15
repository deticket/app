import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Link from 'next/link';
import { TextField, Input } from '@material-ui/core';
import { useState } from 'react';
import sha256 from 'js-sha256';

import UserList from '../Data/users';


const LandingButton = styled(Button)`
  && {
    color: white;
    border: 1px solid white;
    margin-top: 7%;
    width: 16em;
    height: 3.5em;
    border-radius: 3px;
    font-size: 1em;
    background-color: transparent;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: 16em;
    background-color: transparent;
  }
`;

const LogoSection = styled.div`
    height 40vh;
`;

const ErrorHeader = styled.div`
    height: 10vh;
    background: rgba(999,0,0,0.4);
    border-radius: 0px 0px 10px 10px;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    slideIn: transform 300ms ease-in-out;
`;

const EmptyHeader = styled.div`
    height 10vh;
    background: transparent;
    font-size: 2em;
`;

function Login() {
  // const [loginError, setLoginError] = useState(false);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setValues] = useState({
    loginError: false,
    username: '',
    password: '',
  });

  const changeUsername = (e) => {
    setValues({
      ...form,
      username: e.target.value,
    });
  };

  const changePassword = (e) => {
    setValues({
      ...form,
      password: e.target.value,
    });
  };


  const validateLogin = (user, pw) => {
    // loop through UserList searching for the Username/Password combination
    for (let i = 0; i < UserList.users.length; i += 1) {
      // if there is a match, return the route
      if (UserList.users[i].name === user && UserList.users[i].password === sha256(pw)) {
        // if it is an admin, send him to the scanner App / in the future to the portal
        if (UserList.users[i].role === 'admin') {
          return '/scannerApp';
        }
        // if its a regular user (not an admin user), send him to his wallet
        return `/wallet?user=${UserList.users[i].userID}`;
      }
    }
    // if the username/password combination didnt not match, return to same page
    return '/';
  };


  const checkForError = () => {
    if (validateLogin(form.username, form.password) === '/') {
      console.log('ERROR');
      setValues({
        ...form,
        loginError: true,
      });
    }
  };

  return (
    <>

      {form.loginError
        ? (
          <ErrorHeader>
        Login Failed - Please try again
          </ErrorHeader>
        )
        : (
          <EmptyHeader />
        )
      }

      <LogoSection>
        {/* insert Logo here once we have one */}
        {/* e.g. <img src={logo} className="App-logo" alt="logo" /> */}
      </LogoSection>
      <StyledTextField
        id="standard-with-placeholder"
        placeholder="Username or Email"
        value={form.username}
        // className={classes.textField}
        margin="normal"
        onChange={changeUsername}
      />
      <StyledTextField
        id="standard-password-input"
        // className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        placeholder="Password"
        value={form.password}
        onChange={changePassword}
      />
      <Link href={validateLogin(form.username, form.password)}>
        <LandingButton
          onClick={() => checkForError()}
        >
          Login
        </LandingButton>
      </Link>
      <LandingButton> Sign up </LandingButton>
    </>
  );
}

export default Login;
