import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import WorkIcon from '@mui/icons-material/Work';
import DraftsIcon from '@mui/icons-material/Drafts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


function UserHome({user, setUser}){
    const [interviewCode, setInterviewCode] = useState('')
    let history = useHistory()

    useEffect(()=>{
         fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          // setInterviews(user.Interviews)
          });
      }
    });
    }, [])

    console.log(user)

    return (
        <div>
           <p style={{color: 'white'}}>Welcome {user.name}!</p> 
           <h2 style={{color: 'white'}} className='center'> Please enter code below to go to an interview! </h2>
           <div className='center'>
           <Input  placeholder='Interview Code' value={interviewCode} onChange={(e)=> setInterviewCode(e.target.value)} variant='filled' sx={{ bgcolor: 'white', color: 'black'}} autoFocus/>
            <Button   onClick={()=> {
                history.push(`/interview/${interviewCode}`)
            }} variant='filled' sx={{ bgcolor: '#CF9FFF', color: 'black'}} disabled={interviewCode ? false: true}>Let's go</Button>
           </div>

           {
               user.interviews.length && <h3>My completed interviews:</h3>
           }

           
                {user.interviews.length && 
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'white', opacity: '0.8'}}>
                <List >{user.interviews.map( interview => {
                   return  <ListItem diablePadding >

                        <ListItemIcon> 
                            <WorkIcon/>
                        </ListItemIcon>
                        <ListItemText primary={interview.job.title} />
              
                   </ListItem>
                    })}</List>
                      </Box>
                    }
            
        </div>
    )
}
export default UserHome