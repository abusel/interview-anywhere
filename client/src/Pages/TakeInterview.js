import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {Button} from '@material-ui/core';
import QuestionAnswer from '../Components/QuestionAnswer';


function TakeInterview({user}){
    const [jobId, setJobId] = useState('')
    const [interview, setInterview] = useState('')
    const [questions, setQuestions] = useState([])
    const [questionNum, setQuestionNum] = useState(0)
    let question = (questionNum) => <QuestionAnswer interview={interview} question={questions[questionNum]} test={questionNum}/>


    const params = useParams()



    useEffect(()=>{
     
    }, [questionNum])
    
    function startInterview(){

        console.log({
            jobId: jobId
        }, questions)
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
        }).then(r => {
            if (r.ok){
                return r.json()
            }
        }).then(data => setInterview(data))
    }

    useEffect(
      () => setJobId(params.jobId),
      [jobId, params.jobId, setJobId]
    );
    useEffect(()=>{
        fetch(`/api/jobs/${jobId}`).then(res => res.json()).then(data => setQuestions(data.questions))
    }, [jobId, setJobId])
    return (
        <div>
            job_id: {jobId}
            <Button onClick={startInterview}>Start Interview</Button>
            {
                interview && questions && question(questionNum)
            }
            
            
            <Button onClick={()=> setQuestionNum(questionNum => questionNum + 1)}>Next Question</Button>
        </div>
    )
}

export default TakeInterview