import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {Button} from '@material-ui/core';
import QuestionAnswer from '../Components/QuestionAnswer';


function TakeInterview({user}){
    const [jobId, setJobId] = useState('')
    const [interview, setInterview] = useState('')
    const [questions, setQuestions] = useState([])

    const params = useParams()
    
    function startInterview(){

        console.log({
            jobId: jobId
        })
        fetch('/api/interviews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                job_id: jobId,
                user_id: user.id
            })
        }).then(r => r.json()).then(data => setInterview(data))
    }

    useEffect(
      () => setJobId(params.jobId),
      [jobId, params.jobId, setJobId]
    );
    useEffect(()=>{
        fetch(`/api/jobs/${jobId}`).then(res => res.json()).then(data => setQuestions(data.questions))
    }, [jobId])
    return (
        <div>
            job_id: {jobId}
            <Button onClick={startInterview}>Start Interview</Button>
            {interview && <QuestionAnswer interview={interview} question={questions[0]}/>
            }
        </div>
    )
}

export default TakeInterview