import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), transparent;
    z-index: -1;
`;

// #4124EE;
const Background = () => (
  <Layout />
);

export default Background;
