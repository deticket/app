import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Close from '@material-ui/icons/Close';


const TopContainer = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: flex-end;
`;

const BottomContainer = styled.div`
  width: 100%; 
  display: flex; 
  justify-content: space-around;
`;

const CloseIcon = styled(Close)`
    && {
      width: 2em;
      height: 2em;
    }
`;

const CloseButton = styled(Button)`
    && {
    height: 2em;
    font-size: 2em;
    color: black;
    background: white;
    }
`;

const BuyButton = styled(Button)`
    && {
      font-size: 3em; 
      width: 3em;
      height: 3em;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    && {
    font-size: 4em; 
    height: 2em;
    }
`;

const StyledSelect = styled(Select)`
    && {
    font-size: 5em; 
    width: 2em;
    color: black;
    }
`;

const StyledDialogContentText = styled(DialogContentText)`
  && {
    font-size: 3em; 
    margin-bottom: 2em;
  }
`;

const StyledFormControl = styled(FormControl)`
    width: 100%;
`;

function PurchaseDialog(props) {
  const [numberOfTickets, setNumberofTickets] = useState(0);
  // console.log(`isOpen: ${props.isOpen}`);

  function handleNumberChange(event) {
    setNumberofTickets(event.target.value);
  }

  const { isOpen } = props;

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        open={isOpen}
        // onClose={this.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <TopContainer>
            <CloseButton onClick={() => props.setState(false)} color="primary">
              <CloseIcon />
            </CloseButton>
          </TopContainer>
          <StyledDialogContentText>
            How many Tickets do you want to get?
          </StyledDialogContentText>
          <StyledFormControl>
            <BottomContainer>
              <StyledSelect
                value={numberOfTickets}
                onChange={handleNumberChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <StyledMenuItem value="1">1</StyledMenuItem>
                <StyledMenuItem value="2">2</StyledMenuItem>
                <StyledMenuItem value="3">3</StyledMenuItem>
                <StyledMenuItem value="4">4</StyledMenuItem>
              </StyledSelect>
              <BuyButton color="primary">
                BUY
              </BuyButton>
            </BottomContainer>
          </StyledFormControl>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

PurchaseDialog.propTypes = {
  isOpen: PropTypes.bool,
  setState: PropTypes.func,
};

PurchaseDialog.defaultProps = {
  isOpen: 'false',
  setState: () => {},
};

export default PurchaseDialog;
