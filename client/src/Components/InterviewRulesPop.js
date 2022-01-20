import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function InterviewRulesPop({open, setOpen, startInterview, questions}){
    const [agree, setAgree] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAgree(false)
  };
    return (
        <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Interview Rules"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            - Make sure your sound is on
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            - After you start the interview, the first question will play and immediately after you will answer
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            - There are no retakes on questions or for the interview, DO NOT exit the interview once you have started as you will not be able to retake it
          </DialogContentText>
        </DialogContent>
        <DialogActions>


                <FormControlLabel control={<Checkbox   onChange={()=> setAgree(agree => !agree)}/>} label="I have read and agree to the rules" />
        

          <Button onClick={()=> {
              if (agree ){
                  
                  startInterview()
                  }
                if (agree && questions){
                    handleClose()
                }
          }} autoFocus>
            Start Interview
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default InterviewRulesPop