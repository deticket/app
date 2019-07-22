import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import Close from '@material-ui/icons/Close';

export const TopContainer = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: flex-end;
  background-color: rgba(244, 247, 251, 0.85);
`;

export const MidContainer = styled.div`
  width: 100%; 
  display: block; 
  justify-content: space-around;
  margin-top: 1em;
`;

export const BottomContainer = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: space-around;
`;

export const ListHeader = styled.div`
  font-size: 1em;
  font-weight: bold;
  width: 100%; 
  height: 2em;
  display: flex; 
  margin-bottom: 0.5em;
`;

export const CloseIcon = styled(Close)`
  && {
    width: 1em;
    height: 1em;
  }
`;

export const CloseButton = styled(Button)`
  && {
    font-size: 1em;
    color: black;
    padding: 1em;
  }
`;

export const BuyButton = styled(Button)`
  && {
    font-size: 0.9em; 
    height: 2em;
    color: black;
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  && {
    background-color: rgba(244, 247, 251, 0.85);
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const TopRow = styled.div`
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.2em;
`;

export const BottomRow = styled.div`
  font-size: 0.9em;
  color: gray;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledCell = styled.div`
  font-size: 1em;
  text-align: center;
  color: black;
  height: 5em;
  display: flex;
  flex-direction: column;
  border-radius: 6px 6px 0px 0px;
`;

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MinusButton = styled(Button)`
  && {
    font-size: 3em;
  }
`;

export const MinusButtonDisabled = styled(Button)`
  && {
    color: darkgray;
    font-size: 3em;
  }
`;

export const PlusButton = styled(Button)`
  && {
    font-size: 2em;
  }
`;

export const PlusButtonDisabled = styled(Button)`
  && {
    color: darkgray;
    font-size: 2em;
  }
  `;

export const TicketNumber = styled.div`
  font-size: 2em;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
`;
