import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react'

function ViewJobPostings(){

    const [allJobs, setAllJobs] = useState([])

    useEffect(()=> {
            fetch("/api/jobs").then(res => res.json()).then(data => setAllJobs(data))
    }, [])

  
    
    return (
        <div        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "2rem",
          margin: "auto",
          width: "90%",
        }}>
          
      
  
         



         {
             allJobs[0] && allJobs.map(job => {
                 return <Card variant="outlined" style={{margin: '2rem'}}>{ <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Job Posting
      </Typography>
      <Typography variant="h5" component="div">
        {job.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        For {job.user.name}
      </Typography>
      <Typography variant="body2">
        Contact info: 
        <br />
        {job.user.email}
      </Typography>
        <Typography variant="body2">
        {new Date (job.created_at).year
        }
      </Typography>

    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>}</Card>
             })
         }
     
        </div>

        
    )
}

export default ViewJobPostings