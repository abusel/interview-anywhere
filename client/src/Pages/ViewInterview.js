import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";



function ViewInterview({interview, setInterview}){
    const [job, setJob] = useState('')
    const [questionAnswer, setQuestionAnswer] = useState([])
    const params = useParams();



    useEffect(()=>{
        fetch(`/api/interviews/${params.interviewId}`).then(r => r.json()).then(data => setInterview(data))
    }, [])

    



    useEffect(()=>{
        // fetch(`/api/interviews/${interview.id}`)
        // .then(r => r.json())
        // .then(data => {console.log(interview)
        //     setJobId(data.job_id)

        fetch(`/api/jobs/${interview.job_id}`).then(r => r.json()).then(data => setJob(data))
    
    },[interview])

    useEffect(()=>{
         if (job && interview){
            for (let i=0; i< interview.answers.length; i++){
                setQuestionAnswer(questionAnswer => [...questionAnswer, job.questions[i]])
                setQuestionAnswer(questionAnswer => [...questionAnswer, interview.answers[i]])
         } 
        }
    }, [job])





    return(
        <>
        <div>
            b;lasdihjfk
            {interview.id}
        </div>
        <div>
            <Button onClick={()=> console.log(questionAnswer)}>click me</Button>
            {questionAnswer.map(video => {
                return <video  controls src={video.link}></video>
            })}
        </div>
        </>

       
    )
}
export default ViewInterview 