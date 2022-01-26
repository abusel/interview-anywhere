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
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDelete from '../Components/ConfirmDelete'


function ViewJob({job, setJob, adding, interview, setInterview, setAdding}){
    const params = useParams();
    const [log, setLog] = useState(false)
    const [questions, setQuestions] = useState([])
    const [post, setPost] = useState(false)
    const [interviews, setInterviews] = useState([])
    const [counter, setCounter] = useState(1)
    const [selectedInterviewId, setSelectedInterviewId] = useState('')
    const [open, setOpen] = useState(false)
    const [recorded, setRecorded] = useState(false)
    const [hasRecorded, setHasRecorded] = useState(false)


    
    
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
            <ConfirmDelete open={open} setOpen={setOpen} job={job}/>
            <h2>{job.title}</h2>
            <h3>Interview Code: {job.id}</h3>
            {!adding && <Button onClick={()=>setOpen(true)}>Delete Job Posting
                <DeleteIcon/>
            </Button>}
            {adding && <Button  variant='outlined' onClick={()=> history.push(`/${job.id}`)}> Finish Adding Questions</Button>}



            <div style={{width: '80vw', textAlign: 'center'} } className='center' >  
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
            {!adding && <Button className='center' variant='outlined' style={ {marginLeft: '25vw'}} onClick={()=> {
                adding = true
                history.push(`/create/${job.id}`)
                }}>Add More Questions</Button>}

            {recorded && <div className='center'> <Button variant='outlined' onClick={()=>{
               setPost(post => !post)
               setRecorded(false)
               setHasRecorded(false)
               }}>Add Question</Button> </div>}
           { adding ? <div className='center'><RecordView type='q2' questions={questions} setQuestions={setQuestions} post={post} job= {job} setRecorded={setRecorded} hasRecorded={hasRecorded} setHasRecorded={setHasRecorded}/>
           
            
            </div> : <>
             
                {interviews[0] && <h3>View Interviews:</h3>}
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
                     interviews[0] && <div style={{display: 'flex'}}> <Autocomplete
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