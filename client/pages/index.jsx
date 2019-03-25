import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Link from "next/link";

const LandingButton = styled(Button)`
  && {
    color: white;
    border: 1px solid white;
    margin-top: 7%;
    width: 15em;
    height: 3em;
    border-radius: 10px;
    font-size: 2em;
    background-color: transparent;
  }
`;

const TopSection = styled.div`
    height 50%;
`;

function Login() {
  return (
    <>
      <TopSection>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </TopSection>
      <Link href="/wallet">
        <LandingButton>Login</LandingButton>
      </Link>
      <LandingButton> Sign up </LandingButton>
    </>
  );
}

export default Login;
