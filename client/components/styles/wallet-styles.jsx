import styled from 'styled-components';


export const StyledCell = styled.div`
    font-size: 1em;
    text-align: center;
    color: black;
    height: 6em;
    background: rgba(999,999,999,0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 6px 6px 0px 0px;
    display: flex;
`;

export const ColoredCell = styled.div`
    font-size: 1.25em;
    text-align: center;
    color: white;
    height: 2.5em;
    background: #16043E;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0px 0px 6px 6px;
    display: flex;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
`;

export const GridContainer = styled.div`
  margin: auto;
`;

export const Heading1 = styled.h1`
  font-size: 3em;
  font-weight: normal;
  margin: 0;
  padding-top: 2em;
`;

export const SubHeading = styled.h1`
  height: 1em;
  font-size: 1em;
  font-weight: lighter;
  margin-bottom: 20%;
`;
