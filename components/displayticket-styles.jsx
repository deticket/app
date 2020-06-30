import BackIcon from '@material-ui/icons/ArrowBack';
import FingerIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const HeaderCell = styled.div`
  font-size: 1em;
  color: rgba(69, 69, 69, 1);
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 2.2em;
  padding-left: 0em;
  padding-right: 1em;
`;

export const ContentCell = styled.div`
  font-size: 1.5em;
  color: black;
  background: transparent;
  height: 1.7em;
  padding-left: 0em;
  padding-right: 1em;
  margin-top: 0.2em;
`;

export const ContentCellSmall = styled.div`
  font-size: 1.2em;
  color: black;
  background: transparent;
  height: 1.7em;
  padding-left: 0em;
  padding-right: 1em;
  margin-top: 0.2em;
`;

export const TopPaper = styled(Paper)`
  && {
    margin: 1em auto 0 auto;
    color: black;
    width: 90%;
    background: rgba(244, 247, 251, 0.85);
    border-radius: 6px;
    padding-top: 2em;
    padding-bottom: 1.5em;
    height: 19em;
  }
`;

export const MiddlePaper = styled(Paper)`
  && {
    margin: 1em auto 0 auto;
    color: black;
    width: 90%;
    background: rgba(244, 247, 251, 0.85);
    border-radius: 6px;
  }
`;

export const BottomPaper = styled(Paper)`
  && {
    margin: 1em auto 0 auto;
    color: black;
    width: 90%;
    background: rgba(244, 247, 251, 0.85);
    border-radius: 6px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 7%;
  }
`;

export const CounterContainer = styled.div`
  font-size: 1.2em;
  margin-top: 1em;
`;

export const MiddleContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 7%;
  padding-top: 0.2em;
  padding-bottom: 0.6em;

`;

export const StyledHeader = styled.header`
  justify-content: flex-start;
  margin: auto;
  display: flex;
  height: 7em;
  font-family: "arial";
`;

export const HeaderButton = styled(Button)`
  && {
    color: white;
    border-color: transparent;
    width: 40%;
    background-color: transparent;
  }
`;

export const HeaderIcon = styled(BackIcon)`
  && {
    color: white;
    margin-right: 25%;
    height: 100%;
    width: 50%;
  }
`;

export const TapIcon = styled(FingerIcon)`
  && {
    color: black;
    margin-right: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    height: 5em;
    width: 5em;
  }
`;
