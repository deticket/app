import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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

export const StyledCell = styled.div`
    font-size: 1em;
    color: black;
    height: 6em;
    background: rgba(999,999,999,0.8);
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 5px;
    display: flex;
    margin: auto;
    width: 85%;
    padding-left: 5%;
    padding-right: 5%;
`;

export const GridContainer = styled.div`
  margin: auto;
  margin-top: 10%;
`;

export const FilterContainer = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 10%;
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const TestButton = styled(Button)`
  && {
    font-size: 1em;
    text-transform: none;
    color: black;
    height: 6em;
    background: rgba(999,999,999,0.8);
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 5px;
    display: flex;
    margin: auto;
    width: 85%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const SearchButton = styled(Button)`
&& {
  height: 2.2em;
  width: 25%;
  font-size: 1em;
  color: black;
  background: rgba(999,999,999,0.8);
}
`;

export const SearchButtonLong = styled(Button)`
&& {
  height: 2.2em;
  width: 40%;
  font-size: 1em;
  color: black;
  background: rgba(999,999,999,0.8);
}
`;

export const DateCell = styled.div`
    font-size: 1em;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    margin-left: 7.5%;
    margin-bottom: 2%;
`;

export const Contents = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 5em;
    width: 75vw;
    font-size: 1em;
`;

export const TopPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9em;
  line-height: 1.25;
  margin-top: 0.5em;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.2em;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8em;
  color: rgba(85, 73, 73, 1);
`;

export const BottomPart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const BottomLeft = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: flex-end;
  font-size: 0.9em;
`;

export const BottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
`;