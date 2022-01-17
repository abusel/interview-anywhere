import CreateQuestion from '../Components/CreateQuestion';
import {useState} from 'react'

function CreateJob({user, job, setJob}){


    return (
        <div>
            <h3>Create a new job</h3>
            <h4>{job.title}</h4>
            <CreateQuestion setJob={setJob} job={job} user={user}/>
        </div>
    )
}

export default CreateJob