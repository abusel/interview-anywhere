import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Accordion } from "@mui/material";
import {useHistory} from 'react-router-dom'




function ViewInterview({interview, setInterview}){
    const [job, setJob] = useState('')
    const [questionAnswer, setQuestionAnswer] = useState([])
    const params = useParams();
    let history = useHistory()
    //const [source, setSource] = useState('https://res.cloudinary.com/abusel/video/upload/v1642199731/hb0s5hwwsxzlzsrrtlab.mkv')





    useEffect(()=>{
        fetch(`/api/interviews/${params.interviewId}`).then(r => r.json()).then(data => setInterview(data))
        // setTimeout(()=>{
        //     setSource('https://res.cloudinary.com/abusel/video/upload/v1642207765/cyc14yiq9cg4zevqgkbn.mkv')
        // }, 6000)
        
        
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
        setQuestionAnswer([])
         if (job && interview.answers){
            for (let i=0; i< interview.answers.length; i++){
                setQuestionAnswer(questionAnswer => [...questionAnswer, job.questions[i]])
                setQuestionAnswer(questionAnswer => [...questionAnswer, interview.answers[i]])
         } 
        }
    }, [job])





    return(
        <div >
        {/* <video autoPlay src={source}></video> */}
      { interview.user &&  <h2>{interview.user.name} interview for {job.title}</h2>}

      {!interview.user && <div className='center'> 
                <h3>Oops, Looks like we couldn't find that interview.  Please navigate from the home page</h3>
                <Button className='center' color="primary" variant="contained"  onClick={()=> {
                    history.push('/')
                }}> Back to Home</Button>
            </div>}

        <div>

        </div>
        <div style={{width: '90vw', textAlign: 'center'} } className='center' >
            {/* <Button onClick={()=> console.log(questionAnswer)}>click me</Button> */}
            {questionAnswer.map(video => {
               if (questionAnswer.indexOf(video) % 2 === 0) {return (
                // <div><video  controls src={video.link}></video></div>
                <Accordion >
                <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question {(questionAnswer.indexOf(video)/2 +1)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <div>
                 <video src={video.link} controls   width={600}/>
                 <video src={questionAnswer[questionAnswer.indexOf(video) +1].link} controls width={600}/>
              </div>
              </Typography>
            </AccordionDetails>
                </Accordion>
                )}
            })}
        </div>
        </div>

       
    )
}
export default ViewInterview 