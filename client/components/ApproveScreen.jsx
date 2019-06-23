import React from 'react';
import Check from '@material-ui/icons/CheckCircleOutline';
import styled from 'styled-components';

const CheckIcon = styled(Check)`
&& {
  height: 15em;
  width: 15em;
}
`;

const Container = styled.div`
  font-size: 1.5em;
  text-align: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const MessageGreen = styled.div`
font-size: 1.5em;
text-align: center;
color: green;
width: 5em;
height 3em;
background: transparent;
`;

const GreenBackground = styled.div`
color: white;
width: 100vw;
height 100vh;
background: linear-gradient(180deg, green 0%, rgba(255, 255, 255, 0) 100%), white;
`;

const ApproveScreen = () => (
  <GreenBackground>
    <Container>
      <CheckIcon />
      <MessageGreen>ACCESS APPROVED</MessageGreen>
    </Container>
  </GreenBackground>
);

export default ApproveScreen;
