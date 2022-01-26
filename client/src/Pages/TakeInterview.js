import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import QuestionAnswer from '../Components/QuestionAnswer';
import InterviewRulesPop from '../Components/InterviewRulesPop'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {useHistory} from 'react-router-dom'


function TakeInterview({user}){
    const [jobId, setJobId] = useState('')
    const [interview, setInterview] = useState('')
    const [questions, setQuestions] = useState([])
    const [questionNum, setQuestionNum] = useState(0)
    const [hide, setHide] = useState(false)
    const [start, setStart] = useState(0)
    const [open, setOpen] = useState(false);
    const [jobHeader, setJobHeader] = useState('')
    const [found, setFound] = useState(true)
    const [recording, setRecording] = useState(false)
    const [alreadyTaken, setAlreadyTaken] = useState(false)
    const [recorded, setRecorded] = useState(false)
    const [started, setStarted] = useState(false)

    
    
    let question = (questionNum) => questionNum < questions.length ? <QuestionAnswer interview={interview} question={questions[questionNum]} test={questionNum} hide={hide} setHide={setHide} recording={recording} setRecording={setRecording} recorded={recorded} setRecorded={setRecorded} /> : <div> 
                <h3>Nice Job! You are all finished.</h3>
                <Button color="primary" variant="contained"  onClick={()=> {
                    history.push('/')
                }}> Back to Home</Button>
            </div>
     
    const history = useHistory()


    const params = useParams()



    useEffect(()=>{
        jobId &&  fetch(`/api/jobs/${jobId}`).then(res => res.json()).then(data => {
            setJobHeader('Interview to be a ' + data.title + ' for ' + data.user.name)
            setQuestions(data.questions)}).catch(()=> setFound(false))
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
            else{
                setAlreadyTaken(true)
            }
        }).then(data => setInterview(data)).then(()=> setStarted(true))
    }

    useEffect(()=>{
        console.log(recording)
    }, [recording])

    useEffect(
      () => setJobId(params.jobId),
      [jobId, params.jobId, setJobId]
    );
    useEffect(()=>{
        fetch(`/api/jobs/${jobId}`).then(res => res.json()).then(data => setQuestions(data.questions))
    }, [jobId, setJobId])
    return (

        <div className='center start' style={{color: 'white'}}>
            <h1>{jobHeader}</h1>
           { questions && found && !alreadyTaken && questionNum < questions.length && <p> Question Number {questionNum + 1} of {questions.length}</p>}
    
            

           {found && questionNum === 0 && !recording && !recorded && !started && <Button className='bigbutton' sx={{bgcolor: 'white', color: 'black'}} onClick={()=> setOpen(true)}  ><h2 className='black'>Start Interview</h2></Button>}
             {/* <Button  sx={{ bgcolor: 'white', color: 'black'}}  onClick={()=> {
                setQuestionNum(questionNum => questionNum + 1)
                setHide(false) 
                } }  >Next Question</Button> */}
            {
                interview && questions && question(questionNum)
            }

              {
                interview && questions && questionNum !== questions.length && !recording && recorded && <Button  sx={{ bgcolor: 'white', color: 'black'}}  onClick={()=> {
                setQuestionNum(questionNum => questionNum + 1)
                setHide(false) 
                setRecorded(false)
                } }  >Next Question</Button>
            }

            {!found && <div className='center'> 
                <h3>Oops, Looks like we couldn't find that interview.  Please check the interview code you entered.</h3>
                <Button className='center' color="primary" variant="contained"  onClick={()=> {
                    history.push('/')
                }}> Back to Home</Button>
            </div>}

            {alreadyTaken && <div className='center'> 
                <h3>Oops, Looks like you have already taken took this interview.  We only allow one submission per interview.</h3>
                <Button className='center' color="primary" variant="contained"  onClick={()=> {
                    history.push('/')
                }}> Back to Home</Button>
            </div>}


         
            
           
                <InterviewRulesPop open={open} setOpen={setOpen} startInterview={startInterview} questions = {questions}/>
        </div>
    )
}

export default TakeInterview