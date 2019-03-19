/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Close from '@material-ui/icons/Close';


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


// eslint-disable-next-line react/prop-types
function PurchaseDialog(props) {
  const [numberOfTickets, setNumberofTickets] = useState(0);

  function handleNumberChange(event) {
    setNumberofTickets(event.target.value);
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        // maxWidth="true"
        open={props.isOpen}
        // onClose={this.handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <CloseButton onClick={() => props.setState(false)} color="primary">
              <CloseIcon />
            </CloseButton>
          </div>
          <DialogContentText style={{ fontSize: '3em', marginBottom: '2em' }}>
            How many Tickets do you want to get?
          </DialogContentText>
          <FormControl style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Select
                value={numberOfTickets}
                style={{ fontSize: '5em', width: '2em', color: 'black' }}
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
              </Select>
              <BuyButton color="primary">
                BUY
              </BuyButton>
            </div>
          </FormControl>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default PurchaseDialog;
