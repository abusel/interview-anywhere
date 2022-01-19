import { Accordion, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecordView from "../Components/RecordView";
import {useHistory} from 'react-router-dom'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function ViewJob({job, setJob, adding, interview, setInterview, setAdding}){
    const params = useParams();
    const [log, setLog] = useState(false)
    const [questions, setQuestions] = useState([])
    const [post, setPost] = useState(false)
    const [interviews, setInterviews] = useState([])
    const [counter, setCounter] = useState(1)
    const [selectedInterviewId, setSelectedInterviewId] = useState('')
    let history = useHistory()

 useEffect(()=>{
     
 }, [])


    useEffect(()=>{
        let jobId = params.createdJob? params.createdJob : params.job

        fetch(`/api/jobs/${jobId}`).then(r => r.json()).then(data => setJob(data))
        
    }, [])

    useEffect(
      () => {
        !adding && fetch(`/api/interviewjob/${job.id}`).then(r => r.json()).then(data => setInterviews(data))
      },
      [job]
    );

    useEffect(()=>{
        fetch(`/api/jobs/${job.id}`).then(r => r.json()).then(data => setQuestions(data.questions))
    }, [job])
  
    return(
        <div>
            {job.title}



            <div>  
                <h3>View Questions:</h3>
            {
                questions && questions.map(q =>{
                  
                    return (
                       
                          <Accordion>
                          <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Question {questions.indexOf(q) +1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                        <div>
                           <video src={q.link} controls autoplay  width={600}/>
                        </div>
                        </Typography>
                      </AccordionDetails>
                          </Accordion>


                    )
                })
            }
            </div>  
            {!adding && <Button variant='outlined' onClick={()=> {
                adding = true
                history.push(`/create/${job.id}`)
                }}>Add More Questions</Button>}


           { adding ? <><RecordView type='q2' questions={questions} setQuestions={setQuestions} post={post} job= {job} />
            <Button onClick={()=>setPost(post => !post)}>Add Question</Button>
            <Button onClick={()=> history.push(`/`)}> Publish</Button>
            </> : <>
                <h3> Link: http://localhost:4000/interview/{job.id}</h3>
                <h3>Interview Code: {job.id}</h3>
                <h5>View Interviews</h5>
                {/* {
                    <ul>
                        {
                            interviews[0] && interviews.map(interview => {
                                return  <li onClick={()=> {
                                    // history.push(`/interview/${interview.id}`)
                                    console.log(interview)
                                    setInterview(interview)
                                }}>{interview.user.name}</li>
                            })
                        }
                    </ul>
                    
                } */}

                {
                     interviews[0] && <div> <Autocomplete
                     disableClearable
                     onChange={(e, newValue)=> {
                            setInterview(newValue)
                        }}
                     disablePortal
                     id="combo-box-demo"
                     options={interviews}
                     getOptionLabel={(option) => option.user.name}
                     sx={{ width: 300 }}
                     renderInput={(params) => <TextField {...params} label="Applicant" />}
                   />
                   <Button variant='outlined' onClick={()=> {
                       interview && history.push(`/interview/${interview.id}`)
                       }}>View Interview</Button>
                   </div>
                }
            </>}
            
            
        </div>
    )
}

export default ViewJob