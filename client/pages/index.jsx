import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Link from 'next/link';

const LandingButton = styled(Button)`
    && {
    color: white;
    border: 1px solid white;
    margin-top: 7%;
    width: 15em;
    height: 3em;
    border-radius: 10px;
    font-size: 3em;
    background-color: transparent;
    }
`;

// TODO: make Background its own components to reuse in other pages
const Background = styled.div`
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
`;

const TopSection = styled.div`
    height 50%;
`;


function Login() {
  return (
    <Background>
      <TopSection>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </TopSection>
      <Link href="/wallet">
        <LandingButton>
          Login
        </LandingButton>
      </Link>
      <LandingButton> Sign up </LandingButton>
    </Background>
  );
}

export default Login;
