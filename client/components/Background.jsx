import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    font-size: 1.5em;    
    text-align: center;
    color: white;
    width: 100vw;
    height 100vh;
    background: linear-gradient(180deg, #231A59 0%, rgba(255, 255, 255, 0) 100%), #4124EE;
    z-index: -1;
`;

function background() {
  return (
    <Background />
  );
}

export default background;
