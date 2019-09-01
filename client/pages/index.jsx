import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config';

import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Link from 'next/link';
import { TextField, Input } from '@material-ui/core';
import { useState } from 'react';
import sha256 from 'js-sha256';

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

const query = gql`
	query {
	  users {
      userID
      hashedPW
    }
	}
`

const Index = () => {

  const [form, setValues] = useState({
    loginError: false,
    username: '',
    password: '',
    userData: [],
  });

  // Updatting Username & PW on input
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

  // Validating Username & PW combination by running thru userData
  const validateLogin = (user, pw, userData) => {
    console.log('ud:', userData);
    // loop through UserList searching for the Username/Password combination
    for (let i = 0; i < userData.length; i += 1) {
      // if there is a match, return the route
      if (userData[i].userID == user && userData[i].hashedPW == sha256(pw)) {
        // if it is an admin, send him to the scanner App / in the future to the portal
        if (userData[i].role === 'admin') {
          return '/scannerApp';
        }
        // if its a regular user (not an admin user), send him to his wallet
        return `/wallet?user=${userData[i].userID}`;
      }
    }
    console.log("here");
    // if the username/password combination didnt not match, return to same page
    return '/';
  };


  const checkForError = () => {
    // TODO: fix this to make it only call if the user/PW combination is wrong
    if (validateLogin(form.username, form.password, form.userData) === '/') {
      console.log(form.userData);
      console.log('ERROR');
      setValues({
        ...form,
        loginError: true,
      });
    }
  };

  return (
    <Query    // <- Wrapping the main component with Query component from react-apollo
      query={query}
      fetchPolicy={'cache-and-network'}
    >
      {({ loading, data: { users: userLogins } }) => {
        // TODO: add loading screen
        // TODO: add fetch error screen

        // setValues({
        //   ...form,
        //   userData: userLogins,
        // });
        return (
          <div>
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
            <Link href={validateLogin(form.username, form.password, userLogins)}>
              <LandingButton
                onClick={() => checkForError()}
              >
                Login
              </LandingButton>
            </Link>
            <LandingButton> Sign up </LandingButton>
            {console.log("a", userLogins)}
          </div>
        );
      }}
    </Query>
  );
};

export default withData(Index)