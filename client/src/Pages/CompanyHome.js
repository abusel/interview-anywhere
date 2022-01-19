import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
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


function CompanyHome({user,setJob}){
    const [jobs, setJobs] = useState([])
    let history = useHistory()
    console.log(jobs)


    useEffect(() => {
        if(user.is_company){
          fetch("/api/jobs").then(res => res.json()).then(data => setJobs(data))
        }
      }, [user]);
    return (
        <div>
            <div>
                <h3>View Posted Jobs</h3>
           


                    {jobs[0] && 
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>{jobs.filter(job => {
                    return job.user_id === user.id
                }).map(job => {
                   return  <ListItem diablePadding onClick={()=> {
                       setJob(job)
                       history.push(`/${job.id}`)
                   }}>
                   <ListItemButton> 
                        <ListItemIcon> 
                            <WorkIcon/>
                        </ListItemIcon>
                        <ListItemText primary={job.title} secondary={job.users.length + ' Applicants'}/>
                   </ListItemButton>
                   </ListItem>
                    })}</List>
                      </Box>
                    }




                
            </div>
            <div>
                or
            </div>
            <div>

                 <Button variant='outlined' onClick={()=> history.push(`/create`)}>Create a Job</Button>
            </div>
        </div>
    )
}
export default CompanyHome