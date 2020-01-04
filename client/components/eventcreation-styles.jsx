import BackIcon from '@material-ui/icons/ArrowBack';
import FingerIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';


export const EventLocationField = styled(TextField)`
  margin-bottom: 1em;
  width: 100%;
`;


export const FormContainer = styled.div`
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2em;
  padding-bottom: 2em;
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

export const UploadButton = styled(Button)`
  && {
    margin-bottom: 1em;
    background: #EEEEF3;
    color: #8D8989;
    width: 9em;
    height: 3em;
    justify-content: space-around;
    text-transform: none;
    fontSize: 1em;
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-size: 1em;
    margin-bottom: 1em;
    background: #1E90FF;
    color: white;
    width: 10em;
    height: 3em;
    justify-content: space-around;
    text-transform: none;
  }
`;

export const TopButton = styled(Button)`
  && {
    font-size: 1em;
    margin-bottom: 1em;
    background: #1E90FF;
    color: white;
    width: 6em;
    height: 2.5em;
    justify-content: space-around;
    text-transform: none;
  }
`;

export const TopButtonDisabled = styled(Button)`
  && {
    font-size: 1em;
    margin-bottom: 1em;
    background: transparent;
    color: #1E90FF;
    border-color: #1E90FF;
    width: 6em;
    height: 2.5em;
    justify-content: space-around;
    text-transform: none;
  }
`;

export const TopButtonComingSoon = styled(Button)`
  && {
    font-size: 1em;
    margin-bottom: 1em;
    background: transparent;
    color: grey;
    border-color: grey;
    width: 6em;
    height: 2.5em;
    justify-content: space-around;
    text-transform: none;
  }
`;

export const SubmitButton = styled(Button)`
  && {
    margin-bottom: 1em;
    background: #1E90FF;
    color: white;
    width: 70%;
    border-radius: 40px;
    font-size: 1.2em;
    text-transform: none;
  }
`;

export const ButtonContainer = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  `;
// style={{
//   marginBottom: "1em",
//   background: '#1E90FF',
//   color: 'white',
//   width: '10em',
//   height: "3em",
//   justifyContent: 'space-around',
//   textTransform: 'none',
// }}




export const styles = {

  notchedOutline: {
    borderWidth: "3px",
    borderColor: "#BFC4C9 !important",
  },
  focused: {
    "& $notchedOutline": {
      borderWidth: "3px !important",
      borderColor: "#1E90FF !important",
    }
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  margin: {
    marginBottom: '1em',
  },
  paperstyle: {
    background: '#BCD2EB',
  },
  inputEventName: {
    height: '3em',
    background: '#EEEEF3',
    color: 'black',
    borderRadius: 5,
  },
  inputEventDescription: {
    height: 200,
    background: '#EEEEF3',
    color: 'black',
    borderRadius: 5,
  },
  inputNumberOfTickets: {
    height: '3em',
    width: '10em',
    background: '#EEEEF3',
    color: 'black',
    borderRadius: 5,
  },
  inputStartDate: {
    height: '3em',
    width: '12em',
    background: '#EEEEF3',
    color: 'black',
    borderRadius: 5,
  },
  inputStartTime: {
    height: '3em',
    background: '#EEEEF3',
    color: 'black',
    borderRadius: 5,
  },
  inputEventLocation: {
    height: '3em',
    background: '#EEEEF3',
    color: 'black',
    borderRadius: 5,
  },
};