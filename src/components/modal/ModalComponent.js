import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Backdrop, Fade} from '@material-ui/core';
 

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    colorButton,
    variant,
    buttonText,
    children, 
    modalTitle
  } = props
  return (
    <div>
      <Button 
      onClick={handleOpen} 
      style={{borderRadius:  50, height: 33, minWidth: 100, margin: '0 5px'}} 
      color={colorButton} variant={variant} >
          {buttonText}
     </Button>
 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{backgroundColor:"white", padding: 25, borderRadius: 20}}>
            <h2 id="transition-modal-title" style={{textAlign: 'center'}}>{modalTitle}</h2>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}