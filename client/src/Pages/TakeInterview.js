import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {Button} from '@material-ui/core';
import QuestionAnswer from '../Components/QuestionAnswer';
import InterviewRulesPop from '../Components/InterviewRulesPop'


function TakeInterview({user}){
    const [jobId, setJobId] = useState('')
    const [interview, setInterview] = useState('')
    const [questions, setQuestions] = useState([])
    const [questionNum, setQuestionNum] = useState(0)
    const [hide, setHide] = useState(false)
    const [start, setStart] = useState(0)
    const [open, setOpen] = useState(false);
    const [jobHeader, setJobHeader] = useState('')
    
    let question = (questionNum) => questionNum < questions.length ? <QuestionAnswer interview={interview} question={questions[questionNum]} test={questionNum} hide={hide} setHide={setHide}/> : <div>Done!</div>



    const params = useParams()



    useEffect(()=>{
        jobId &&  fetch(`/api/jobs/${jobId}`).then(res => res.json()).then(data => {
            setJobHeader('Interview to be a ' + data.title + ' for ' + data.user.name)
            setQuestions(data.questions)})
    }, [start, jobId])

    useEffect(()=> {
        jobId && console.log(jobId)
    }, [jobId])
    
    function startInterview(){
        setStart(start => start +1)

        console.log({
            jobId: jobId
        }, questions)
        questions && fetch('/api/interviews', {
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
            <h3>{jobHeader}</h3>
            job_id: {jobId}
            <Button onClick={()=> setOpen(true)}>Start Interview</Button>
            {
                interview && questions && question(questionNum)
            }
            
            
            <Button onClick={()=> {
                setQuestionNum(questionNum => questionNum + 1)
                setHide(false)
                }}>Next Question</Button>
                <InterviewRulesPop open={open} setOpen={setOpen} startInterview={startInterview} questions = {questions}/>
        </div>
    )
}

export default TakeInterview