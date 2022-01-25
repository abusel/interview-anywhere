import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useHistory} from 'react-router-dom'

function ConfirmDelete({open, setOpen, startInterview, job}){
    const history = useHistory()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          {"Are you sure you wish to delete this job?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will be permanent.  This job and all corresponding interviews will be deleted forever.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>


    
         <Button onClick={()=> {
              setOpen(false)
          }} >
            Cancel
          </Button>


          <Button onClick={()=> {
                fetch(`/api/jobs/${job.id}`,{
                    method: 'DELETE'
                }).then(() => history.push('/'))
            }}>
            Yes, Delete 
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default ConfirmDelete