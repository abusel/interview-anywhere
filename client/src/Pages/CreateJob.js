import CreateQuestion from '../Components/CreateQuestion';
import {useState, useEffect} from 'react'

function CreateJob({user, job, setJob}){

    useEffect(()=> {
        setJob('')
    }, [])


    return (
        <div>
            <h3>Create a new job</h3>
            <h4>{job.title}</h4>
            <CreateQuestion setJob={setJob} job={job} user={user}/>
        </div>
    )
}

export default CreateJob