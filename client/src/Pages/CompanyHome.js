import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'


function CompanyHome({user,setJob}){
    const [jobs, setJobs] = useState([])
    let history = useHistory()


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
                <ul>{jobs.filter(job => {
                    return job.user_id === user.id
                }).map(job => {
                   return  <li onClick={()=> {
                       setJob(job)
                       history.push(`/${job.id}`)
                   }}>{job.title}</li>
                    })}</ul>}


                
            </div>
            <div>
                or
            </div>
            <div>
                <Link to='/create'>
                 <Button>Create a Job</Button>
                </Link>
            </div>
        </div>
    )
}
export default CompanyHome