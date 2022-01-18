import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";




function ViewInterview({interview, setInterview}){
    const [job, setJob] = useState('')
    const [questionAnswer, setQuestionAnswer] = useState([])
    const params = useParams();
    const [source, setSource] = useState('https://res.cloudinary.com/abusel/video/upload/v1642199731/hb0s5hwwsxzlzsrrtlab.mkv')





    useEffect(()=>{
        fetch(`/api/interviews/${params.interviewId}`).then(r => r.json()).then(data => setInterview(data))
        setTimeout(()=>{
            setSource('https://res.cloudinary.com/abusel/video/upload/v1642207765/cyc14yiq9cg4zevqgkbn.mkv')
        }, 6000)
        
        
    }, [])

    // useEffect(()=>{
    //     if (questionAnswer) { 
    //         let i = 0
    //         while (i < questionAnswer.length){
    //         // setSource(questionAnswer[i].link)
    //         setInterval(()=>{
    //             console.log(i)
    //             i++
    //         }, 2000)}
    //     }
      
    // }, [questionAnswer])

    



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
        {/* <video autoPlay src={source}></video> */}

        <div>
            b;lasdihjfk
            {interview.id}
        </div>
        <div>
            <Button onClick={()=> console.log(questionAnswer)}>click me</Button>
            {questionAnswer.map(video => {
                return <div><video  controls src={video.link}></video></div>
            })}
        </div>
        </>

       
    )
}
export default ViewInterview 