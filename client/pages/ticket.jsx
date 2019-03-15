/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import Link from 'next/link';
// import Background from '../components/Background.jsx';

// import { createGlobalStyle } from "styled-components";

import Ticket from '../components/displayticket';


const Background = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: white;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
`;


// TODO: factor divs out, change color of Icon to white, change fonts
const DisplayTicket = props => (
  <Background>
    <Ticket id={props.url.query.id} />
    {console.log(props.url.query.id)}
  </Background>
);

export default DisplayTicket;
