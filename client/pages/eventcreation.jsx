import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
// import CreationForm from '../components/creationform.jsx';
import CreationForm from '../components/creationForm.jsx';


import { FormContainer, styles } from '../components/eventcreation-styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const { classes, children, className, ...other } = props;
  const [open, setOpen] = React.useState(true); // TODO: need to be false once integrrated in page

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        PaperProps={{
          className: classes.paperstyle
        }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{ zIndex: '1' }}
      >
        {/* <AppBar className={classes.appBar}> */}
        {/* <Toolbar> */}
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" style={{ alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
        {/* </Toolbar> */}
        {/* </AppBar> */}
        <FormContainer>
          <CreationForm />
        </FormContainer>
      </Dialog>
    </div >
  );
}

export default withStyles(styles)(FullScreenDialog);